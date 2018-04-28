import { Injectable } from '@angular/core';
import {Headers} from '@angular/http';
import {Http} from '@angular/http';

@Injectable()
export class TeamsService {

  constructor(private http: Http) {
  }

  getTeams() {
      let headers = new Headers();
      headers.append('Content-type', 'application/json');
      return this.http.get('http://localhost:3000/teams', {headers: headers})
        .map(res => res.json());
  }

  createTeam(team) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/teams/createTeam', team, {headers: headers})
      .map(res => res.json());

  }
}


