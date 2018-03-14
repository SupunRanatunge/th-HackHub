import { Component } from '@angular/core';

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
  eventDelete() {
    alert('You really want to do this??');
  }
}
