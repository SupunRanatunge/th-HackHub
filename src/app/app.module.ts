import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {routing} from './app-routing';
import {HomeComponent} from './pages/home/home.component';
import {HackathonComponent} from './pages/hackathon/hackathon.component';
import {CreateHackathonComponent} from './pages/createHackathon/createHackathon.component';
import {UpdateHackathonComponent} from './pages/updateHackathon/updateHackathon.component';
import {DeleteHackathonComponent} from './pages/deleteHackathon/deleteHackathon.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarComponent, CarouselComponent, HomeComponent, HackathonComponent, CreateHackathonComponent,
    UpdateHackathonComponent, DeleteHackathonComponent, LoginComponent, SignupComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
