import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing/sharing.service';
import { BuySoldierService } from 'src/app/services/soldier/buySoldier/buy-soldier.service';
import { GetAllSoldiersService } from 'src/app/services/soldier/getAllSoldiers/get-all-soldiers.service';
import { RemoveSoldierToArmyService } from 'src/app/services/soldier/removeSoldierToArmy/remove-soldier-to-army.service';
import { GetUserArmyService } from 'src/app/services/user/getUserArmy/get-user-army.service';

@Component({
  selector: 'app-army-tab',
  templateUrl: './army-tab.component.html',
  styleUrls: ['./army-tab.component.scss']
})
export class ArmyTabComponent implements OnInit {
  user! : any;
  army : any = [];
  soldiers: any;
  selectionSoldierTabEnable : boolean = false;

  constructor(
    private sharingService: SharingService,
    private getAllSoldiersService: GetAllSoldiersService,
    private buySoldierService: BuySoldierService,
    private getUserArmyService: GetUserArmyService,
    private removeSoldierToArmyService: RemoveSoldierToArmyService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.user = this.sharingService.sharingValue;
    // console.log(this.sharingService.sharingValue);
    // console.log(this.user.land.army.ArmySoldier);
    console.log(this.user.id);
    this.getUserArmyService.Execute(this.user.id).subscribe((retorno)=>{
      for (const soldier of retorno.land.army.ArmySoldier) {
        this.army.push(soldier.soldier);
      }
    });
    console.log(this.army);
    // this.user.land.army.ArmySoldier.forEach((soldier:any)=>{this.army?.push(soldier.soldier)});
    this.getAllSoldiersService.Execute().subscribe((retorno)=>{this.soldiers=retorno});
  }

  ShowSelectionSoldierTab(){
    this.selectionSoldierTabEnable = true;
  }

  BuySoldier(newSoldierId: string){
    this.buySoldierService.Execute(this.user.id, newSoldierId).subscribe(()=>{
    });
  }

  DeleteSoldier(idSoldier: string){
    this.removeSoldierToArmyService.Execute(this.user.id, idSoldier).subscribe(()=>{
      for( var i = 0; i < this.army.length; i++){ 
        if ( this.army[i].id == idSoldier) { 
            this.army.splice(i, 1); 
            return;
        }
      }
    });
  }
}
