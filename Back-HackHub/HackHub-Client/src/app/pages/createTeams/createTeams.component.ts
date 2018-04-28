import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-createTeams',
  templateUrl: `createTeams.component.html`,

})
export class CreateTeamsComponent implements OnInit{

  teams: any;
  teamName: String;
  memberName:String;


  constructor(private teamService: TeamsService,
              private validateService: ValidationsService,
              private flashMessage: FlashMessagesService,
              private router: Router){}

  createTeam() {
    const team = {
      teamName: this.teamName,
      members: []
    };
    if(!this.validateService.validateTeam(team)){                     //Make sure all the blanks are filled

      this.flashMessage.show("Please enter the Team name", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.teamService.createTeam(team).subscribe(data =>{

      if(data.success){
        alert("New Team is created");
        this.router.navigate(['/CreateYourTeam'])                 //redirect to events page after successful event create
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        // this.router.navigate(['/createEvent'])
      }
    });
  }

  removeTeam() {
    const teamName = {
      teamName: this.teamName
    };

    if(!this.validateService.validateTeam(teamName)){
      this.flashMessage.show("Enter the Team name you want to delete",{cssClass: 'alert-danger',timeout: 3000})
      return false;
    }
    this.teamService.removeTeam(teamName).subscribe(data =>{


    })
  }

  addMember(){

  }
  ngOnInit() {

    this.teamService.getTeams().subscribe(profile => {
      this.teams = profile;
    },err =>{
      console.log(err);
      return false;
    });
  }

}
