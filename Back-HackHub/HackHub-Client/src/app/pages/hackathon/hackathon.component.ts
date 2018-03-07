import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,
})
export class HackathonComponent  {
  hackathon = 'Hacktitude';
  place = 'Malabe Virtusa firm';
  date = '16th Feb';
  time = '10am';

  onClick() {
    alert('Now Create your Hackathon');
  }
  onClicked() {
    alert('Now Update your Hackathons');
  }
  Clicked() {
    alert('Delete your Hackathon');
  }
}
