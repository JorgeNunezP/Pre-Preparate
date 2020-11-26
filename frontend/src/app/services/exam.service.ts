import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) { }

  getMV(user_id){
    return this.http.post<any>(this.URL + '/materiasVistas', user_id);
  }

  getQuest(user_id){
    return this.http.get<any>(this.URL + '/showAllQuestions');
  }

  getDev(user_id){
    return this.http.post<any>(this.URL + '/showDev', user_id);
  }

  getSub(){
    return this.http.get<any>(this.URL + '/showSubjs');
  }

}
