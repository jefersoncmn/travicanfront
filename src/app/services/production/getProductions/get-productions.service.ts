import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProductionsService {
  readonly url = 'http://localhost:3000/productions/';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(){
    return this.http.get<any>(this.url);
  }
}
