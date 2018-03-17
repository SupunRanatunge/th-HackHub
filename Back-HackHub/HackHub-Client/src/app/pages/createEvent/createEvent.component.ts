import {Component} from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';



@Component({
  moduleId: module.id,
  selector: 'app-create-event',
  templateUrl: `createEvent.component.html`,
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
    .buttonCreate {
      margin-left:200px
    }
  `]
})
export class CreateEventComponent {
  name: String;
  host: String;
  date: String;
  time: String;
  place: String;
  specialNotes: String;

  constructor( private validateService: ValidationsService,
               private flashMessage: FlashMessagesService,
               private eventService: EventService,
               private router: Router) {}

  eventCreate() {
    const event = {

      name: this.name,
      host: this.host,
      date: this.date,
      time: this.time,
      place: this.place,
      specialNotes: this.specialNotes
    };
    if(!this.validateService.validateEvent(event)){                     //Make sure all the blanks are filled

      this.flashMessage.show("Please fill all required blanks", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.eventService.createEvent(event).subscribe(data =>{

      if(data.success){
        alert("New Event is created");
        this.router.navigate(['/events'])                 //redirect to events page after successful event create
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/createEvent'])
      }
    });

  }
}
