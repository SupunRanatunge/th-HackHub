import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HackathonService {

  constructor(private http: Http) { }

  createHackathon(hackathon) {
    let headers2 = new Headers();
    headers2.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/hackathons/createHackathon',hackathon,{headers: headers2})
      .map(res => res.json())

  }

  updateHackathon(hackathon) {
    let headers3 = new Headers();
    headers3.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/hackathons/updateHackathon',hackathon,{headers: headers3})
      .map(result => result.json())

  }
  deleteHackathon(hackName){
    let headers4 = new Headers();
    headers4.append('Content-type', 'application/json');
    return this.http.delete('http://localhost:3000/hackathons/deleteHackathon')
      .map(res => res.json())
  }

}
