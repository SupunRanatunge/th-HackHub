import {Component, OnInit} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';
import {AuthService} from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'app-clickHackathon',
  templateUrl: `clickHackathon.component.html`,

})
export class ClickHackathonComponent implements OnInit{


  user: String;




  constructor(private hackService: HackathonService,
              private authService: AuthService) {

  }
  ngOnInit(){
    this.authService.getProfile().subscribe(profile => {

      this.user = profile.user;
      console.log(this.user);
    },err =>{
      console.log(err);
      return false;
    });
    this.hackService.loadHackathonData();




  }

}
