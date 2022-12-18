import { Component, OnInit } from '@angular/core';
import { IUser, User } from 'src/app/models/userModel';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { GetUserService } from 'src/app/services/user/getUser/get-user.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  user? : IUser;

  constructor(
    private getUserService: GetUserService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.LoadUserData();
  }
  
  
  LoadUserData(){
    this.getUserService.Get(this.localStorageService.get("userId"), this.localStorageService.get("token")).subscribe((retorno)=>{
      this.user = retorno;
      console.log(retorno);
    })
  }
}
