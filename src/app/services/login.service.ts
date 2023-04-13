import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL= 'http://localhost:4200/login'

  constructor(private http:HttpClient) {
    
   }
}
