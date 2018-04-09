import {Component} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';


@Component({
  moduleId: module.id,
  selector: 'app-addNews',
  templateUrl: `addNews.component.html`,

})
export class AddnewsComponent {
  news: String;
  hackathon: any;


  constructor(private hackService: HackathonService) {
  }

  addNews() {
    console.log();
    this.hackathon = localStorage.getItem('hackathon');
    // this.hackService.loadHackathonData();
    console.log(this.hackathon['name']);
    console.log(this.hackathon);
    const hackNews = {
      name: this.hackService.getData()


    };


  }


}
