import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private API_URL= 'http://localhost:4200/api';


  constructor(private http:HttpClient) { }

  registerUser(user:any): Observable <any>{
    return this.http.post(`${this.API_URL}`,user)
  }
}
