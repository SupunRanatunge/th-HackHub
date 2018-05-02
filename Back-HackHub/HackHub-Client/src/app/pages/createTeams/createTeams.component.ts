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

  createTeam(hackathonName) {
    const team = {
      teamName: this.teamName,
      members: []
    };
    if(!this.validateService.validateTeam(team)){                     //Make sure all the blanks are filled

      this.flashMessage.show("Please enter the Team name", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.teamService.createTeam(hackathonName,team).subscribe(data =>{

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

    if(!this.validateService.validateTeam(teamName)){         //check whether the team name has entered
      this.flashMessage.show("Enter the Team name you want to delete",{cssClass: 'alert-danger',timeout: 3000})
      return false;
    }
    this.teamService.removeTeam(teamName).subscribe(data =>{


    })
  }

  addMember(team){        //add a member to the team
      const teamMember = {
        teamName: team.teamName,
        member: this.memberName
      }
      this.teamService.addMember(teamMember).subscribe(data => {

        if (data.success) {
          alert('New member is added');
          // this.router.navigate(['/']);
          // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
        } else {
          alert('Unable to add the new member')
          // this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
          // this.router.navigate(['/profile']);
        }
      })
  };

  removeMember(team) {      //remove a member from the team

  }

  ngOnInit() {

    this.teamService.getTeams().subscribe(profile => {    //display the teams
      this.teams = profile;
    },err =>{
      console.log(err);
      return false;
    });
  }

}
