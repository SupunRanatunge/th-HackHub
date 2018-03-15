import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-update-hackathon',
  templateUrl: `updateHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 40px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class UpdateHackathonComponent  {
  updateHackathon() {
    console.log('Hackathon is updated');
  }
}
