import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class HackathonService {
  public sharedData: Object;

  hackathon: any;
  newsHack: any;

  constructor(private http: Http, private router: Router) {
  }

  createHackathon(hackathon) {
    let headers2 = new Headers();
    headers2.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/hackathons/createHackathon', hackathon, {headers: headers2})
      .map(res => res.json());

  }

  updateHackathon(hackathon) {
    alert("New Hackathon is updated");
    this.router.navigate(['/hackathons'])
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/hackathons/updateHackathon', hackathon, {headers: headers})

      .map(result => result.json());




  }

  deleteHackathon(hackName) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    alert('Hackathon is deleted');
    this.router.navigate(['/hackathons']);
    return this.http.delete('http://localhost:3000/hackathons/deleteHackathon', new RequestOptions({
      headers: headers,
      body: hackName
    }))

      .map(res => res.json());
  }

  getHackathon() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/hackathons', {headers: headers})
      .map(res => res.json());
  }

  setData(data) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }

  storeHackathonData(hackathon) {
    localStorage.setItem('hackathon', JSON.stringify(hackathon));
    this.hackathon = hackathon;
    console.log(hackathon.name)
  }

  loadHackathonData() {
    const hackathon = localStorage.getItem( 'hackathon');
    this.hackathon = JSON.parse(hackathon);
    console.log(this.hackathon.name)

  }
  storeNewsHackathon(newsHackathon) {
    localStorage.setItem('newsHack', JSON.stringify(newsHackathon));
    this.newsHack = newsHackathon;
    console.log(this.newsHack.name)
  }

  loadNewsHackathon() {
    const newsHack = localStorage.getItem( 'newsHack');
    this.newsHack = JSON.parse(newsHack);
    console.log(this.newsHack.name)

  }
}
