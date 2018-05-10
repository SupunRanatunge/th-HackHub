import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class EventService {
  // public sharedData: Object;
  event: any;

  constructor(private http: Http, private router: Router) { }
  createEvent(event) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/events/createEvent',event,{headers: headers})
      .map(res => res.json())

  }

  updateEvent(event) {
    alert("Event is updated");
    this.router.navigate(['/events']);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/events/updateEvent', event, {headers: headers})
      .map(result => result.json())
  }

  deleteEvent(eventName){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    alert("Event is deleted");
    return this.http.delete('http://localhost:3000/events/deleteEvent', new RequestOptions({
      headers: headers,
      body: eventName
    }) )
      .map(res => res.json())
  }
  //
  // setData(data) {
  //   this.sharedData = data;
  // }
  //
  // getData() {
  //   return this.sharedData;
  // }

  storeEventData(event) {
    localStorage.setItem('event', JSON.stringify(event));
    this.event = event;
    console.log(event.name)
  }

  loadEventData() {
    const event = localStorage.getItem( 'event');
    this.event = JSON.parse(event);
    console.log(this.event.name)

  }


}

