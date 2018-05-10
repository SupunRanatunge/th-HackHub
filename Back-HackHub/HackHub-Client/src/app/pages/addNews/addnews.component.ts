import {Component} from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

import {NewsService} from '../../services/news.service';



@Component({
  moduleId: module.id,
  selector: 'app-addNews',
  templateUrl: `addNews.component.html`,

})
export class AddnewsComponent {
  newsContent: String;
  topic: any;


  constructor(private validateService: ValidationsService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private newsService: NewsService) {
  }

  addNews() {
    const news = {
      topic: this.topic,
      content: this.newsContent
    };
    if(!this.validateService.validateNews(news)){           //Make sure all the blanks are filled

      this.flashMessage.show("Please fill all required blanks", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.newsService.addNews(news).subscribe(data =>{

      if(data.success){
        alert("New News is added");
        this.router.navigate(['/News'])           //redirect to News page after successful news adding
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/addNews'])
      }
    });


    }


}
