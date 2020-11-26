import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signIn(user){
    return this.http.post<any>(this.URL + '/signIn', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getId(){
    return localStorage.getItem('id');
  }

  getName(){
    return localStorage.getItem('name');
  }

  getMail(){
    return localStorage.getItem('mail');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('mail');
    this.router.navigate(['/login'])
  }

}
