import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  saveDev(dev){
    return this.http.post<any>(this.URL + '/saveDev', dev);
  }

}
