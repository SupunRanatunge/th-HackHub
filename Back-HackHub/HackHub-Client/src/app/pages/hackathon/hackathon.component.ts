import { Component, OnInit} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';



@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,
})
export class HackathonComponent implements OnInit{
  hackathon: any;
  constructor(private hackService: HackathonService){}

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
    //
    //   },
    //   err => {
    //     console.log(err);
    //     return false;
    //   });
  }

}
