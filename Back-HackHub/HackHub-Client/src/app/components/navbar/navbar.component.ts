import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: `navbar.component.html`,
})
export class NavbarComponent  {
  btn1 = 'Home';
  btn2 = 'Hackathons';
  btn3 = 'Events';

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessageService: FlashMessagesService){

  }
  logoutClick(){
    this.authService.logout();
    // this.flashMessageService.show("You are logged out",{
    //   cssClass: 'alert-success',
    //   timeout: 5000
    // });
    this.router.navigate(['/LoginHackHub']);
    return false;
  }
}
