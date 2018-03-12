import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-carousel',
  templateUrl: `carousel.component.html`,
})
export class CarouselComponent  {
  fullImagePath1: String;
  fullImagePath2: String;


  constructor() {
    this.fullImagePath1 = "/assets/images/hackhub-banner-sr.png";
    this.fullImagePath2 = "/assets/images/hackhub2.png";

  }
}
