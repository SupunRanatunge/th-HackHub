import { Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';



@Component({
  moduleId: module.id,
  selector: 'app-clickEvent',
  templateUrl: `clickEvent.component.html`,

})
export class ClickEventComponent implements OnInit{

  constructor(private eventService: EventService) {

  }

  ngOnInit(){
    this.eventService.loadEventData();
  }

}
