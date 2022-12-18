import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetLandsPositionsService {
  readonly url = 'http://localhost:3000/landsPositions';
  constructor(
    private http: HttpClient,
  ) { }

  Execute(){
    return this.http.get<any>(this.url);
  }
}