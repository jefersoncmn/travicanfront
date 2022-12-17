import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  readonly url = 'http://localhost:3000/user';
  constructor(
    private http: HttpClient,
  ) { }

  Get(id:string){
    console.log(this.url+id);
    return this.http.get<any>(this.url+id);
  }
}
