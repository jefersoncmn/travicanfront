import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuySoldierService {
  readonly url = 'http://localhost:3000/event';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(id_user: string, id_soldier: string){
    return this.http.post<any>(this.url, {id_user: id_user,id_production: "", id_soldier: id_soldier, id_war:"", operation: "createSoldier", time: 5});
  }
}
