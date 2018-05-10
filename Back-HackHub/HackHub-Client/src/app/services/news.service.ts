import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  addNews(news){
    console.log('inside service')
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/news/addNews', news, {headers: headers})
      .map(res => res.json());


  }
  getNews() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/news', {headers: headers})
      .map(res => res.json());
  }

}
