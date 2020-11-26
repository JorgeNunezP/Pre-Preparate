import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) { }

  editUser(user){
    return this.http.put<any>(this.URL + '/editUser', user);
  }

}
