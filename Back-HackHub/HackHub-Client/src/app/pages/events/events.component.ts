import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent {
  event = 'Meeting';
  eventPlace = 'MIT Lobby';
  eventDate = '16th March';
  eventTime = '3pm';

  eventCreate() {
    alert('Now Create your Events');
  }
  eventUpdate() {
    alert('Now Update your Events');
  }
  eventDelete() {
    alert('Delete your Event');
  }


}
