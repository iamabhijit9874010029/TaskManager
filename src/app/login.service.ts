import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient!: HttpClient;
  constructor(private httpBackend: HttpBackend, private router: Router, private jwtHelperService: JwtHelperService) { }
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
    this.currentUserName = null;
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")!).token : null;

    if (this.jwtHelperService.isTokenExpired(token)) {
      return false;
    }
    else {
      return true;
    }
  }
}
