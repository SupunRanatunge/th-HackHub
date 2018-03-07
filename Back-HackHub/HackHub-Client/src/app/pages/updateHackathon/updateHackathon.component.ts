import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-update-hackathon',
  templateUrl: `updateHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class UpdateHackathonComponent  {
  onClickUpdate() {
    console.log('Hackathon is updated');
  }
}
