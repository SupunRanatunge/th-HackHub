import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {routing, appRoutingProviders} from './app-routing';
import {HomeComponent} from './pages/home/home.component';
import {HackathonComponent} from './pages/hackathon/hackathon.component';
import {CreateHackathonComponent} from './pages/createHackathon/createHackathon.component';
import {UpdateHackathonComponent} from './pages/updateHackathon/updateHackathon.component';
import {DeleteHackathonComponent} from './pages/deleteHackathon/deleteHackathon.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, CarouselComponent, HomeComponent, HackathonComponent, CreateHackathonComponent,
    UpdateHackathonComponent, DeleteHackathonComponent, LoginComponent, SignupComponent, ProfileComponent  ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders,
  ]
})
export class AppModule { }
