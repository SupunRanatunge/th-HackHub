import {Component} from '@angular/core';


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
  constructor() {}
  eventCreate() {
    console.log('Event is created');

  }
}
