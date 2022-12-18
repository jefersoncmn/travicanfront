import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  readonly url = 'http://localhost:3000/rank';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(){
    return this.http.get<any>(this.url);
  }
}
