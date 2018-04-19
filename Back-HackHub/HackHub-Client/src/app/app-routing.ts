import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {HackathonComponent} from './pages/hackathon/hackathon.component';
import {CreateHackathonComponent} from './pages/createHackathon/createHackathon.component';
import {UpdateHackathonComponent} from './pages/updateHackathon/updateHackathon.component';
import {DeleteHackathonComponent} from './pages/deleteHackathon/deleteHackathon.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {CreateEventComponent} from './pages/createEvent/createEvent.component';
import {UpdateEventComponent} from './pages/updateEvent/updateEvent.component';
import {DeleteEventComponent} from './pages/deleteEvent/deleteEvent.component';
import {EventsComponent} from './pages/events/events.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {AddAdminComponent} from './pages/addAdmin/addAdmin.component';
import {AddnewsComponent} from './pages/addNews/addnews.component';
import {ClickHackathonComponent} from './pages/clickHackathon/clickHackathon.component';
import {CreateTeamsComponent} from './pages/createTeams/createTeams.component';
import {MailingListComponent} from './pages/mailingList.component/mailingList.component';
import {ClickEventComponent} from './pages/clickEvent/clickEvent.component';
import {TeamsComponent} from './pages/teams/teams.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hackathons',
    component: HackathonComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'createHackathons',
    component: CreateHackathonComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'updateHackathons',
    component: UpdateHackathonComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'deleteHackathons',
    component: DeleteHackathonComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'createEvents',
    component: CreateEventComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'updateEvents',
    component: UpdateEventComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'deleteEvents',
    component: DeleteEventComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'LoginHackHub',
    component: LoginComponent
  },
  {
    path: 'SignupHackHub',
    component: SignupComponent
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'AddAdmin',
    component: AddAdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'AddNews',
    component: AddnewsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'ClickHackathon',
    component: ClickHackathonComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'CreateYourTeam',
    component: CreateTeamsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'MailingList',
    component: MailingListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'ClickEvent',
    component: ClickEventComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'Teams',
    component: TeamsComponent,
    canActivate: [AuthGuardService]
  }

];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
