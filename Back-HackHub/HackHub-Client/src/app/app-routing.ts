import { ModuleWithProviders} from '@angular/core';
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
    component: CreateHackathonComponent
  },
  {
    path: 'updateHackathons',
    component: UpdateHackathonComponent
  },
  {
    path: 'deleteHackathons',
    component: DeleteHackathonComponent
  },
  {
    path: 'createEvents',
    component: CreateEventComponent
  },
  {
    path: 'updateEvents',
    component: UpdateEventComponent
  },
  {
    path: 'deleteEvents',
    component: DeleteEventComponent
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
    component: ProfileComponent
  }
  ];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
