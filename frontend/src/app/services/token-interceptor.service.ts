import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
constructor(
private authService: LoginService
) { }


  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }

  
}
