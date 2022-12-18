import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  readonly url = 'http://localhost:3000/user';
  constructor(
    private http: HttpClient,
  ) { }

  Get(id:string, token:string){
    // const header = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   }
    // );
    // console.log(this.url+id);
    return this.http.get<any>(this.url+id, {headers:{"Authorization":"Bearer "+token}});
  }
}
