import { Injectable } from '@angular/core';

import { Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }



    registerUser(user){
      let headers = new Headers();
      headers.append('Content-type','application/json');
      return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        .map(res => res.json());

    }
    authenticateUser(user){
      let headers = new Headers();
      headers.append('Content-type','application/json');
      return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
        .map(res => res.json());
    }
    getProfile(){
      let headers = new Headers();
      this.loadToken();
      console.log("loaded token"+ this.authToken)
      headers.append('Authorization', this.authToken);
      headers.append('Content-type','application/json');
      console.log(headers);
      return this.http.get('http://localhost:3000/users/profile', {headers: headers})
        .map(res => res.json());
    }


    storeUserData(token, user){
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;
      console.log('inside storeUserData'+ this.authToken+' '+this.user);


    }

    loadToken(){
      const token = localStorage.getItem('id_token');
      this.authToken = token
    }

    logout(){
      this.authToken = null;
      this.user = null;
      localStorage.clear();
    }
}
