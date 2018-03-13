import {Component} from '@angular/core';





@Component({
  moduleId: module.id,
  selector: 'app-create-hackathon',
  templateUrl: `createHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 40px;
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
  hackathonCreate() {
    console.log('Hackathon is created');

  }
}
