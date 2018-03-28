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
  createHackathon() {
    alert('Now Create your Hackathon');
  }
  updateHackathon() {
    alert('Now Update your Hackathons');
  }
  deleteHackathon() {
    alert('Delete your Hackathon');
  }
  eventCreate() {
    alert('Now Create your Events');
  }
  eventUpdate() {
    alert('Now Update your Events');
  }
  eventDelete() {
    alert('Delete your Event');
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



