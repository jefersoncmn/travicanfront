import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/userModel';

@Component({
  selector: 'app-production-tab',
  templateUrl: './production-tab.component.html',
  styleUrls: ['./production-tab.component.scss']
})
export class ProductionTabComponent implements OnInit {
  @Input() user! : IUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
