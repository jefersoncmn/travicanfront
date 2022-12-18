import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/models/userModel';
import { SharingService } from 'src/app/services/sharing/sharing.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.scss']
})
export class UserTabComponent implements OnInit {
  @Input() user! : IUser;
  constructor(
    private router: Router,
    private sharingService: SharingService
  ) { }

  ngOnInit(): void {
  }

  ShowProductionsTab(){
    // console.log(this.user);
    this.sharingService.sharingValue = this.user;
    this.router.navigate(['/game/production']);
  }

  ShowArmyTab(){
    this.sharingService.sharingValue = this.user;
    this.router.navigate(['/game/army']);
  }

  ShowRankingTab(){
    this.router.navigate(['/game/rank']);
  }
}
