import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IRegisterService {
  username: string,
  password: string,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly url = 'http://localhost:3000/register/';
  
  constructor(
    private http: HttpClient,
  ) { }

  Register({username, password, name, email}: IRegisterService){
    return this.http.post<any>(this.url, {username, password, name, email});
  }
}
