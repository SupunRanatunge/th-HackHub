import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component ({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent implements OnInit {
  user: any;
  admin: any;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      if (profile.user) {
        this.user = profile.user;
        console.log(this.user);
      }else if( profile.admin){
        this.admin = profile.admin;
        console.log(this.admin);
      }
    },err =>{
      console.log(err);
      return false;
    })
  }
}


    // this.authService.getAdminProfile().subscribe(profile => {
    //     this.admin = profile.admin;
    //     console.log(this.admin)
    //
    //   },
    //   err => {
    //     console.log(err);
    //     return false;
    //   });

