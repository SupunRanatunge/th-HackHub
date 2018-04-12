import { Component} from '@angular/core';
import {EventService} from '../../services/event.service';



@Component({
  moduleId: module.id,
  selector: 'app-clickEvent',
  templateUrl: `clickEvent.component.html`,

})
export class ClickEventComponent {

  constructor(private eventService: EventService) {

  }

}
