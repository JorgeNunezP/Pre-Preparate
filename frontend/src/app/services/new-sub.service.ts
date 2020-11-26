import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSubService {

  private URL = 'http://localhost:3000/api'
  
  constructor(
    private http: HttpClient

  ) { }

  saveQuestion(question){
    return this.http.post<any>(this.URL + '/saveQuestion', question);
  }
}
