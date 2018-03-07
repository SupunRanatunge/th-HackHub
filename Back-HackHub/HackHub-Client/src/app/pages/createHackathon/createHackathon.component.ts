import {Component, OnInit} from '@angular/core';
// import {HttpService} from './http.service';




@Component({
  moduleId: module.id,
  selector: 'app-create-hackathon',
  templateUrl: `createHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
    .buttonCreate {
      margin-left:200px
    }
  `]
})
export class CreateHackathonComponent {
  constructor() {}
  onClickCreate() {
    console.log('Hackathon is created');
    // this.httpService.getDate()
    //   .subscribe(
    //     (data)
  }
}
