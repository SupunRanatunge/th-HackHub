import {Component} from '@angular/core';


@Component({

  selector: 'app-app',
  template: `
    <div style="background-image: url('./../assets/images/hackhub-banner-sr.png');">
      <app-navbar></app-navbar>,
      <router-outlet></router-outlet>
      <br/><br/><br/>
    </div>`


})
export class AppComponent {

}

