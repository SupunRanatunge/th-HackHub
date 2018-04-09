import { Component} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';



@Component({
  moduleId: module.id,
  selector: 'app-clickHackathon',
  templateUrl: `clickHackathon.component.html`,

})
export class ClickHackathonComponent {

  constructor(private hackService: HackathonService) {

  }

}
