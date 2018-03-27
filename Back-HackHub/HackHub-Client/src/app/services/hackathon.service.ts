import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class HackathonService {

  constructor(private http: Http, private router: Router) { }

  createHackathon(hackathon) {
    let headers2 = new Headers();
    headers2.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/hackathons/createHackathon',hackathon,{headers: headers2})
      .map(res => res.json())

  }

  updateHackathon(hackathon) {
    alert("Hackathon is updated");
    this.router.navigate(['/hackathons']);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/hackathons/updateHackathon',hackathon,{headers: headers})
      .map(result => result.json())

  }
  deleteHackathon(hackName){
    let headers4 = new Headers();
    headers4.append('Content-type', 'application/json');
    alert("Hackathon is deleted");
    this.router.navigate(['/hackathons'])
    return this.http.delete('http://localhost:3000/hackathons/deleteHackathon', new RequestOptions({
      headers: headers4,
      body: hackName
    }) )

      .map(res => res.json())
  }



}
