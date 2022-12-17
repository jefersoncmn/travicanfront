
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/userModel';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-village-page',
  templateUrl: './village-page.component.html',
  styleUrls: ['./village-page.component.scss']
})
export class VillagePageComponent implements OnInit {
  productionTabEnable : boolean = false;
  armyTabEnable : boolean = false;
  user? : IUser;

  constructor(
    private activatedRoute : ActivatedRoute,
    private localStorageService : LocalStorageService
  ) { }

  ngOnInit(): void {

    if(this.activatedRoute.snapshot.paramMap.get("operacao") == "production"){
      this.productionTabEnable = true;
    } else if(this.activatedRoute.snapshot.paramMap.get("operacao") == "army"){
      this.armyTabEnable = true;
    }
  }

}
