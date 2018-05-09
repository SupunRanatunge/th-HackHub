import {Component} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';


@Component({
  moduleId: module.id,
  selector: 'app-addNews',
  templateUrl: `addNews.component.html`,

})
export class AddnewsComponent {
  news: String;
  newsHack: any;


  constructor(private hackService: HackathonService) {
  }

  addNews() {

    this.newsHack = localStorage.getItem('newsHack');
    // this.hackService.loadHackathonData();
    console.log(this.newsHack['name']);
    console.log(this.newsHack);
    // const hackNews = {
    //   name: this.hackService.getData()
    //
    //
    // };


  }


}
