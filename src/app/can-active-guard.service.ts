import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuardService implements CanActivate{

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this.router.url);
    // console.log(route);
      if(this.loginService.isAuthenticated()){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }
}
