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
import {CreateEventComponent} from './pages/createEvent/createEvent.component';
import {UpdateEventComponent} from './pages/updateEvent/updateEvent.component';
import {DeleteEventComponent} from './pages/deleteEvent/deleteEvent.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {FormsModule} from '@angular/forms';
import {ValidationsService} from './services/validations.service';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {EventsComponent} from './pages/events/events.component';
import {HttpModule} from '@angular/http';
import {AuthService} from './services/auth.service';
import {HackathonService} from './services/hackathon.service';
import {EventService} from './services/event.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {TeamsService} from './services/teams.service';
import {AddAdminComponent} from './pages/addAdmin/addAdmin.component';
import {PopupComponent} from './components/popupTest/popup.component';
import {AddnewsComponent} from './pages/addNews/addnews.component';
import {ClickHackathonComponent} from './pages/clickHackathon/clickHackathon.component';
import {ClickEventComponent} from './pages/clickEvent/clickEvent.component';
import {CreateTeamsComponent} from './pages/createTeams/createTeams.component';
import {MailingListComponent} from './pages/mailingList.component/mailingList.component';
import {TeamsComponent} from './pages/teams/teams.component';
import {NewsComponent} from './pages/news/news.component';
import {NewsService} from './services/news.service';


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, FlashMessagesModule.forRoot(), HttpModule ],

  declarations: [ AppComponent, NavbarComponent, CarouselComponent, HomeComponent, HackathonComponent, CreateHackathonComponent,
    UpdateHackathonComponent, DeleteHackathonComponent, LoginComponent, SignupComponent, ProfileComponent, DeleteEventComponent,
    UpdateEventComponent, CreateEventComponent, EventsComponent, AddAdminComponent, PopupComponent, AddnewsComponent, ClickHackathonComponent,
  CreateTeamsComponent, MailingListComponent, ClickEventComponent, TeamsComponent, NewsComponent ],

  bootstrap:    [ AppComponent ],

  providers: [
    appRoutingProviders, ValidationsService, FlashMessagesService, AuthService, HackathonService, EventService, AuthGuardService,
    TeamsService, NewsService
  ]
})
export class AppModule { }
