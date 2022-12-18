import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/userModel';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { SharingService } from 'src/app/services/sharing/sharing.service';

@Component({
  selector: 'app-village-page',
  templateUrl: './village-page.component.html',
  styleUrls: ['./village-page.component.scss']
})
export class VillagePageComponent implements OnInit {
  productionTabEnable : boolean = false;
  armyTabEnable : boolean = false;
  @Input()
  user? : IUser;

  constructor(
    private activatedRoute : ActivatedRoute,
    private localStorageService : LocalStorageService,
    private location : Location,
    private sharingService: SharingService
  ) { }

  ngOnInit(): void {
    // console.log(this.location.getState());
    // if(this.activatedRoute.snapshot.paramMap.get("operacao") == "production"){
    //   this.productionTabEnable = true;
    // } else if(this.activatedRoute.snapshot.paramMap.get("operacao") == "army"){
    //   this.armyTabEnable = true;
    // }
  }

}
