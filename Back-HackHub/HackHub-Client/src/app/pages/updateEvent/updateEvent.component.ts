import { Component } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {ValidationsService} from '../../services/validations.service';

@Component({
  moduleId: module.id,
  selector: 'app-update-event',
  templateUrl: `updateEvent.component.html`,
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class UpdateEventComponent  {

  name: String;
  host: String;
  date: String;
  time: String;
  place: String;
  specialNotes: String;
  constructor(private validateService: ValidationsService,
              private flashMessage: FlashMessagesService,
              private eventService: EventService,
              private router: Router){

  }
  eventUpdate() {
    const event = {
      name: this.name,
      host: this.host,
      date: this.date,
      time: this.time,
      place: this.place,
      specialNotes: this.specialNotes
    };
    if(!this.validateService.validateName(event)){
      this.flashMessage.show("Please enter the Event name you want to update", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.eventService.updateEvent(event).subscribe(data =>{

      if(data.success){
        alert("Event is updated");
        this.router.navigate(['/events'])
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/events'])
      }
    });
  }
}
