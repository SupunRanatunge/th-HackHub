import { Component } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ValidationsService} from '../../services/validations.service';
import {EventService} from '../../services/event.service';

@Component({
  moduleId: module.id,
  selector: 'app-delete-event',
  templateUrl: 'deleteEvent.component.html',
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class DeleteEventComponent  {
  name: String;

  constructor( private validateService: ValidationsService,
               private flashMessage: FlashMessagesService,
               private eventService: EventService,
               private router: Router){}

  eventDelete() {
    alert('You really want to do this??');
    const eventName = {
      name: this.name
    };

    if(!this.validateService.validateName(eventName)){
      this.flashMessage.show("Enter the Event name you want to delete",{cssClass: 'alert-danger',timeout: 3000})
      return false;
    }
    this.eventService.deleteEvent(eventName).subscribe(data =>{
      console.log("data: "+data);
      if(data.success){
        alert("Event is deleted");
        this.router.navigate(['/events'])

      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/deleteEvent'])
      }
    })
  }

}
