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
