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


  constructor(private authService: AuthService,
              private router: Router) {

  }

  mail(){
    if(this.user.emailPassword === ''){
      alert("If You want to email someone You first need to enter your email password here")
    }
  }

  subscribe(user){
    const userSubscribe = {
      email: user.email,
      subscribed: true
    }
    this.authService.updateSubscribe(userSubscribe).subscribe(data => {
      window.location.reload()


    })

  }

  unsubscribe(user){
    const userUnsubscribe = {
      email: user.email,
      subscribed: false
    }
    this.authService.updateUnsubscribe(userUnsubscribe).subscribe(data => {
      location.reload()

    })
  }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {

        this.user = profile.user;
        },err =>{
      console.log(err);
      return false;
    })
  }
}



