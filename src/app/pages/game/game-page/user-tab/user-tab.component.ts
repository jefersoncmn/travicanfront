import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/models/userModel';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.scss']
})
export class UserTabComponent implements OnInit {
  @Input() user! : IUser;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ShowProductionsTab(){
    console.log(this.user);
    this.router.navigate(['/game/production', {user: this.user}]);
  }
}
