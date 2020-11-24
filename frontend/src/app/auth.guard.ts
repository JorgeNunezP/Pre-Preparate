import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {LoginService} from './services/login.service'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authservice: LoginService,
    private router: Router
  ){}
  
  canActivate():boolean{
    if(this.authservice.loggedIn()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
