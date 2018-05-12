import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class TeamsService {

  constructor(private http: Http,
              private router: Router) {
  }

  // getTeams(hackathonName) {
  //   console.log('inside teamservice')
  //     let headers = new Headers();
  //     headers.append('Content-type', 'application/json');
  //     return this.http.get('http://localhost:3000/teams', new RequestOptions({
  //       headers: headers,
  //       body: hackathonName
  // }))
  //       .map(res => res.json());
  // }

  createTeam(hackathonName,team) {
    alert("New Team is created");
    this.router.navigate(['/ClickHackathon']);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/teams/createTeam', {hackathonName, team}, {headers: headers})
      .map(res => res.json());

  }

  removeTeam(hackathonName, teamName) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    alert('Team is deleted');
    this.router.navigate(['/ClickHackathon']);
    return this.http.delete('http://localhost:3000/teams/removeTeam', new RequestOptions({
      headers: headers,
      body: { teamName, hackathonName}
    }))

      .map(res => res.json());
  }

  addMember(teamMember) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    alert('New member is added');
    // this.router.navigate(['/hackathons']);
    return this.http.put('http://localhost:3000/teams/addMember', teamMember, {headers: headers})
      .map(result => result.json());

  }
}


