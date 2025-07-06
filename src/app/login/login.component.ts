import { Component } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  onLoginClick() {
    this.loginService.Login(this.loginViewModel).subscribe((response) => {
      this.router.navigate(['/dashboard']),
        (error: Error) => {
          console.error('Login failed:', error);
          this.loginError = "Invalid username or password. Please try again.";
        }
    })
  }
}
