import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RemoveSoldierToArmyService {
  readonly url = 'http://localhost:3000/removeSoldier';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(idUser: string, idSoldier: string){
    return this.http.post<any>(this.url, {idUser: idUser, idSoldier:idSoldier});
  }
}
