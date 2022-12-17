import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ILoginService {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly url = 'http://localhost:3000/login/';
  
  constructor(
    private http: HttpClient,
  ) { }

  Login({username , password}: ILoginService){
    return this.http.post<any>(this.url, {username, password});
  }
}
