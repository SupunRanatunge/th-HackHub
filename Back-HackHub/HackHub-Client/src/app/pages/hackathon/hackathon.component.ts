import { Component, OnInit} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';
import {AuthService} from '../../services/auth.service';



@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,
})
export class HackathonComponent implements OnInit{
  hackathon: any;
  user: Object;
  constructor(private hackService: HackathonService,
              private authService: AuthService){}

  createHackathon() {
    alert('Now Create your Hackathon');
  }
  updateHackathon() {
    alert('Now Update your Hackathons');
  }
  deleteHackathon() {
    alert('Delete your Hackathon');
  }
  ngOnInit(){
    // this.hackService.getHackathon().subscribe(profile => {
    //     this.hackathon = profile.hackathon;
    //     console.log(this.hackathon+"inside ngOnInit")
    //   },
    //   err => {
    //     console.log(err);
    //     return false;
    //   });
    // this.authService.getProfile().subscribe(profile => {
    //     this.user = profile.user;
    //     console.log(this.user)
    //
    //   },
    //   err => {
    //     console.log(err);
    //     return false;
    //   });
  }

}
