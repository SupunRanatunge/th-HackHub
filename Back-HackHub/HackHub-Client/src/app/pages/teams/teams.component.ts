import {Component, OnInit} from '@angular/core';
import {Headers} from '@angular/http';
import {TeamsService} from '../../services/teams.service';

@Component({
  moduleId: module.id,
  selector: 'app-teams',
  templateUrl: `teams.component.html`,

})
export class TeamsComponent implements OnInit{

  teams: any;
  user: String;

  constructor(private teamService: TeamsService) {

  }
  ngOnInit(){

    this.teamService.getTeams().subscribe(profile => {
      this.teams = profile;
    },err =>{
      console.log(err);
      return false;
    });


  }
}
