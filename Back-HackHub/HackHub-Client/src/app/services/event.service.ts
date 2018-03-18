import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Headers, Http} from '@angular/http';

@Injectable()
export class EventService {

  constructor(private http: Http) { }
  createEvent(event) {
    let headers5 = new Headers();
    headers5.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/events/createEvent',event,{headers: headers5})
      .map(res => res.json())

  }

  updateEvent(event) {
    let headers6 = new Headers();
    headers6.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/events/updateEvent',event,{headers: headers6})
      .map(result => result.json())

  }
  deleteEvent(eventName){
    let headers7 = new Headers();
    headers7.append('Content-type', 'application/json');
    return this.http.delete('http://localhost:3000/events/deleteEvent')
      .map(res => res.json())
  }


}

