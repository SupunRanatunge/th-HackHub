import { Component } from '@angular/core';

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
  eventUpdate() {
    console.log('Event is updated');
  }
}
