import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apUrl = environment.apiUrl + '';

//   headers = new HttpHeaders({
//     'Content-Type':'application/json; charset=utf-8'
//   });
//   options = { headers:this.headers }
  
  constructor(private http: HttpClient) { }




}
