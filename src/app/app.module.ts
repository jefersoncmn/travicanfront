import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { ErrorPageComponent } from './pages/error/error-page/error-page.component';
import { GamePageComponent } from './pages/game/game-page/game-page.component';
import { RegisterPageComponent } from './pages/register/register-page/register-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapPageComponent } from './pages/game/game-page/map-page/map-page.component';
import { VillagePageComponent } from './pages/game/game-page/village-page/village-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserTabComponent } from './pages/game/game-page/user-tab/user-tab.component';
import { ProductionTabComponent } from './pages/game/game-page/production-tab/production-tab.component';
import { ArmyTabComponent } from './pages/game/game-page/army-tab/army-tab.component';
import { RankingTabComponent } from './pages/game/game-page/ranking-tab/ranking-tab.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    ErrorPageComponent,
    GamePageComponent,
    MapPageComponent,
    VillagePageComponent,
    UserTabComponent,
    ProductionTabComponent,
    ArmyTabComponent,
    RankingTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
