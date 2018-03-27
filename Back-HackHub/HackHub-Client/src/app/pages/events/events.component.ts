import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit{
  events: any;
  constructor(private authService: AuthService){

  }

  eventCreate() {
    alert('Now Create your Events');
  }
  eventUpdate() {
    alert('Now Update your Events');
  }
  eventDelete() {
    alert('Delete your Event');
  }

  ngOnInit(){

    this.authService.getEvent().subscribe(profile => {
      this.events = profile;
    },err =>{
      console.log(err);
      return false;
    })

  }


}
