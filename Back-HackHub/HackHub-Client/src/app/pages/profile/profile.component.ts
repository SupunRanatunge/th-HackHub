import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component ({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent implements OnInit{
  user: any;

  constructor(private authService: AuthService,
              private router: Router){

  }
  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      console.log("profile  "+ profile.user);
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
