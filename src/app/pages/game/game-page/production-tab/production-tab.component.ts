import { Component, Input, OnInit } from '@angular/core';
import { IProduction } from 'src/app/models/productionModel';
import { IUser } from 'src/app/models/userModel';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { GetProductionsService } from 'src/app/services/production/getProductions/get-productions.service';
import { UpgradeProductionService } from 'src/app/services/production/upgradeProduction/upgrade-production.service';
import { SharingService } from 'src/app/services/sharing/sharing.service';
import { GetUserService } from 'src/app/services/user/getUser/get-user.service';

@Component({
  selector: 'app-production-tab',
  templateUrl: './production-tab.component.html',
  styleUrls: ['./production-tab.component.scss']
})
export class ProductionTabComponent implements OnInit {
  user! : any;
  productions? : IProduction[] = [];
  allProductions? : IProduction[] = [];

  constructor(
    private sharingService: SharingService,
    private getProductionsService: GetProductionsService,
    private upgradeProductionService: UpgradeProductionService,
    private getUserService: GetUserService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    
    this.user = this.getUserService.Get(this.localStorageService.get("userId"), this.localStorageService.get("token")).subscribe((retorno)=>{
      this.user = retorno;
      console.log(retorno);
      this.user.land.ProductionLand.forEach((production:any)=>{this.productions?.push(production.production)});
    })

    //Get All productions
    this.getProductionsService.Execute().subscribe((productions:any)=>{ 
      productions.forEach((_production:any)=>{
        this.allProductions?.push(_production);
      })
    });
  }

  UpgradeProduction(id_production: string, timeToUpgrade: number){
    this.upgradeProductionService.Execute(this.user.id, id_production, timeToUpgrade).subscribe();
  }

}
