import { Component } from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-update-hackathon',
  templateUrl: `updateHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 40px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class UpdateHackathonComponent  {
  name: String;
  host: String;
  startDate: String;
  startTime: String;
  closeDate: String;
  place: String;
  price: String;
  numbOfMems: String;
  regLink: String;
  specialNotes: String;

  constructor( private validateService: ValidationsService,
               private flashMessage: FlashMessagesService,
               private hackService: HackathonService,
               private router: Router) {


  }  updateHackathon() {

    const hackathon = {
      name: this.name,
      host: this.host,
      startDate: this.startDate,
      startTime: this.startTime,
      closeDate: this.closeDate,
      place: this.place,
      price: this.price,
      numbOfMems: this.numbOfMems,
      regLink: this.regLink,
      specialNotes: this.specialNotes
    };
    if(!this.validateService.validateName(hackathon)){     //Make sure the name of updating hackathon is given
      this.flashMessage.show("Please enter the Hackathon name you want to update", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.hackService.updateHackathon(hackathon).subscribe(data =>{

      if(data.success){
        alert("New Hackathon is updated");
        this.router.navigate(['/hackathons'])
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/hackathons'])
      }
    });
    }
}



