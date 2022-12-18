import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from 'src/app/models/eventModel';

@Injectable({
  providedIn: 'root'
})
export class UpgradeProductionService {
  readonly url = 'http://localhost:3000/event';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(id_user: string, id_production: string, timeToUpgrade: number){
    return this.http.post<any>(this.url, {id_user: id_user,id_production: id_production, id_soldier: "",id_war:"", operation: "upgradeProduction", time: 5});
  }
}
