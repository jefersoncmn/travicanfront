import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserArmyService {
  readonly url = 'http://localhost:3000/army';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(idUser:string){
    return this.http.get<any>(this.url+idUser);
  }
}
