import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate() {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/LoginHackHub']);
      return false;
    }
  }

}
