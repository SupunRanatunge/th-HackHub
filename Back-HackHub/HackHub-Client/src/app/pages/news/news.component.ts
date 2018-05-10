import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';



@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: `news.component.html`,

})
export class NewsComponent implements OnInit{
  news: String;


  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(profile => {
      this.news = profile;
    },err =>{
      console.log(err);
      return false;
    });

  }
}
