import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient

  ) { }

  save(subj){
    return this.http.post<any>(this.URL + '/saveSeeSubj', subj)
  }
}
