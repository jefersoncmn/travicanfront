import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error/error-page/error-page.component';
import { GamePageComponent } from './pages/game/game-page/game-page.component';
import { MapPageComponent } from './pages/game/game-page/map-page/map-page.component';
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
        path:':operacao', component: VillagePageComponent,
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
