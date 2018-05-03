import {Component, OnInit} from '@angular/core';
import {Headers} from '@angular/http';
import {TeamsService} from '../../services/teams.service';
import {HackathonService} from '../../services/hackathon.service';

@Component({
  moduleId: module.id,
  selector: 'app-teams',
  templateUrl: `teams.component.html`,

})
export class TeamsComponent implements OnInit{

  teams: any;
  user: String;

  constructor(private teamService: TeamsService,
              private hackService: HackathonService) {

  }
  ngOnInit(){

    // this.teamService.getTeams(this.hackService.hackathon.name).subscribe(profile => {
    //
    //   this.teams = profile;
    // },err =>{
    //   console.log(err);
    //   return false;
    // });
    this.hackService.loadHackathonData();

  }
}
