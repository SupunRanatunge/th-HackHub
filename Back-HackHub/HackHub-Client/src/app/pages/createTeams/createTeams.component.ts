import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {HackathonService} from '../../services/hackathon.service';


@Component({
  moduleId: module.id,
  selector: 'app-createTeams',
  templateUrl: `createTeams.component.html`,

})
export class CreateTeamsComponent implements OnInit{

  teams: any;
  teamName: String;
  teamName2: String;

  member:String;
  hackathons: any;


  constructor(private teamService: TeamsService,
              private validateService: ValidationsService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private hackService: HackathonService){}

  createTeam(hackathonName) {
    const team = {
      teamName: this.teamName,
      members: []
    };
    console.log(team.teamName);
    if(!this.validateService.validateTeam(team)){                     //Make sure all the blanks are filled

      this.flashMessage.show("Please enter the Team name", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.teamService.createTeam(hackathonName,team).subscribe(data =>{

      if(data.success){
        // alert("New Team is created");
        // this.router.navigate(['/hackathons'])                 //redirect to events page after successful event create
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        // this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        // this.router.navigate(['/createEvent'])
      }
    });
  }

  removeTeam(hackathonName) {
    const teamName = {
      teamName: this.teamName
    };

    if(!this.validateService.validateTeam(teamName)){         //check whether the team name has entered
      this.flashMessage.show("Enter the Team name you want to delete",{cssClass: 'alert-danger',timeout: 3000})
      return false;
    }
    this.teamService.removeTeam(hackathonName,teamName).subscribe(data =>{


    })
  }

  addMember(hackathonName){        //add a member to the team
      const teamMember = {
        hackathonName: hackathonName,
        teamName: this.teamName2,
        member: this.member
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

    this.hackService.getHackathon().subscribe(profile => {
      this.hackathons = profile;
    },err =>{
      console.log(err);
      return false;
    });
    this.hackService.loadHackathonData();
  }

}
