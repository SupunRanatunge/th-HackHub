import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  admin: any;

  constructor(private http: Http) {
  }


  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res.json());

  }

  registerAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/admins/register', admin, {headers: headers})
      .map(res => res.json());

  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/admins/authenticate', admin, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {

    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');

    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json());

  }


  getEvent() {
    let headers = new Headers();

    headers.append('Content-type', 'application/json');

    return this.http.get('http://localhost:3000/events', {headers: headers})
      .map(res => res.json());
  }

  getUsers() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/users/mailingList', {headers: headers})
      .map(res => res.json());
  }


  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeAdminData(token, admin) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }

  addEmailPassword(adminEmail) {
    console.log("in the auth service "+ adminEmail.email);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/admins/addEmailPassword', adminEmail, {headers: headers})
      .map(result => result.json());

  }
  updateStatus(userStatus) {
    console.log("in the auth service "+ userStatus.email);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/users/updateStatus', userStatus, {headers: headers})
      .map(result => result.json());

  }

  sendEmail(user, users, emailDetails) {

    let headers = new Headers();
    headers.append('Content-type','application/json');
    console.log(headers);
    return this.http.post('http://localhost:3000/admins/sendEmail',{user, users, emailDetails}, {headers: headers})
      .map(result => result.json());



  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');

  }

  logout() {
    this.authToken = null;
    if (this.user) {
      alert(this.user.name + ' ,you are logged out');
      this.user = null;
    }
    if (this.admin) {
      alert(this.admin.name + ' ,you are logged out');
      this.admin = null;
    }

    localStorage.clear();
  }

}
