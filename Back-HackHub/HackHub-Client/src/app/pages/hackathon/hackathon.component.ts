import { Component, OnInit} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';
import {AuthService} from '../../services/auth.service';



@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,
})
export class HackathonComponent implements OnInit{
  hackathons: any;

  constructor(private hackService: HackathonService,
              private authService: AuthService
              ){}


  ngOnInit(){

    this.hackService.getHackathon().subscribe(profile => {
      this.hackathons = profile;
    },err =>{
      console.log(err);
      return false;
    })

    }

}
