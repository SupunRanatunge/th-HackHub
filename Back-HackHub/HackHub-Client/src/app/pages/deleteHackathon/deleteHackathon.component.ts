import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-delete-hackathon',
  templateUrl: `deleteHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class DeleteHackathonComponent  {
  ClickDelete() {
    alert('You really want to do this??');
  }
}
