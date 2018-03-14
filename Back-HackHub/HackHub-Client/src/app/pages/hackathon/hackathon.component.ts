import { Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,
})
export class HackathonComponent {
  hackathon = 'Hacktitude';
  place = 'Malabe Virtusa firm';
  date = '16th Feb';
  time = '10am';


  createHackathon() {
    alert('Now Create your Hackathon');
  }
  updateHackathon() {
    alert('Now Update your Hackathons');
  }
  deleteHackathon() {
    alert('Delete your Hackathon');
  }

}
