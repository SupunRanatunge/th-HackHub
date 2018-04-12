import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { EventService} from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit{
  events: any;
  user: any;
  token: any;
  constructor(private authService: AuthService,
              private eventService: EventService){

  }
  eventCreate(){
    alert("Now Create Your Event")
  }
  eventUpdate(){
    alert("Update Your Event")
  }
  eventDelete(){
    alert("Delete Your Event")
  }



  ngOnInit(){

    this.authService.getEvent().subscribe(profile => {
      this.events = profile;
    },err =>{
      console.log(err);
      return false;
    })

    this.token = localStorage.getItem('id_token');
    if(this.token){
      console.log(this.token);
      this.authService.getProfile().subscribe(profile => {

        this.user = profile.user;
        console.log(this.user);
      },err =>{
        console.log(err);
        return false;
      })
    }

  }



}
