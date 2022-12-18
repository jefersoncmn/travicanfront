import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error/error-page/error-page.component';
import { ArmyTabComponent } from './pages/game/game-page/army-tab/army-tab.component';
import { GamePageComponent } from './pages/game/game-page/game-page.component';
import { MapPageComponent } from './pages/game/game-page/map-page/map-page.component';
import { ProductionTabComponent } from './pages/game/game-page/production-tab/production-tab.component';
import { RankingTabComponent } from './pages/game/game-page/ranking-tab/ranking-tab.component';
import { VillagePageComponent } from './pages/game/game-page/village-page/village-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page/register-page.component';

const routes: Routes =[
  { 
    path:'login', 
    component: LoginPageComponent
  },
  { 
    path:'register', 
    component: RegisterPageComponent
  },
  { 
    path:'game', 
    component: GamePageComponent,
    children: [
      {
        path:'map', component: MapPageComponent,
      },
      {
        path:'army', component: ArmyTabComponent,
      },
      {
        path:'production', component: ProductionTabComponent,
      },
      {
        path:'rank', component: RankingTabComponent,
      },
      {
        path:'', component: VillagePageComponent,
      },
    ]
  },
  { 
    path:'', 
    component: HomePageComponent
  },
  { 
    path:'**', 
    component: ErrorPageComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
