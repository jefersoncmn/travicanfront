import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/ranking/get-users.service';

@Component({
  selector: 'app-ranking-tab',
  templateUrl: './ranking-tab.component.html',
  styleUrls: ['./ranking-tab.component.scss']
})
export class RankingTabComponent implements OnInit {
  users : any;
  constructor(
    private getUsersRanKService: GetUsersService
  ) { }

  ngOnInit(): void {
    this.getUsersRanKService.Execute().subscribe((retorno)=>{
      this.users = retorno;
    });
  }

}
