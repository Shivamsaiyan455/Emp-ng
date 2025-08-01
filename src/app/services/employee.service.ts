import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }

  //http://localhost:8080/login
  login(userlogin:any):Observable<any>{
    return this.http.post("http://localhost:8080/login",userlogin);
  }

  //http://localhost:8080/register
  register(userregister:any):Observable<any>{
    return this.http.post("http://localhost:8080/register",userregister)

  }
  //http://localhost:8080/getAll
  getAllEmployee(): Observable<any> {
  return this.http.get("http://localhost:8080/getAll");
}

  }


