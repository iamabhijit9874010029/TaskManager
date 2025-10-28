import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient!: HttpClient;
  constructor(private httpBackend: HttpBackend, private router: Router) { }
  currentUserName: string | null = null;

  public Login(loginViewModel: LoginViewModel) {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>('https://localhost:7062/api/account/authenticate', loginViewModel, { responseType: 'json' }).pipe(
      map(user => {
        if (user) {
          this.currentUserName = user.userName;
          // localStorage.setItem('currentUser', JSON.stringify(user));
          // localStorage.setItem('currentUser', JSON.stringify(user));
          sessionStorage['currentUser'] = JSON.stringify(user);
          console.log("User logged in: " + this.currentUserName);
        }
        return user;
      })
    );



    // return this.httpClient.post<any>('/api/account/authenticate', loginViewModel, { responseType: 'json' }).pipe(
    //   map(user => {
    //     if (user) {
    //       this.currentUserName = user.userName;
    //       // localStorage.setItem('currentUser', JSON.stringify(user));
    //       console.log("User logged in: " + this.currentUserName);
    //     }
    //     return user;
    //   })
    // );
  }

  public Logout() {
    this.currentUserName = null;
    // localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
