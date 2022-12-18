import { Component, OnInit } from '@angular/core';
import { GetLandsPositionsService } from 'src/app/services/user/getLandsPositions/get-lands-positions.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  lands: any = [];
  constructor(
    private getLandsPositionsService: GetLandsPositionsService
  ) { }

  ngOnInit(): void {
    this.getLandsPositionsService.Execute().subscribe((retorno)=>{
      for (const land of retorno) {
        console.log(land);
        this.lands.push(land);
      }
    });
  }

}
