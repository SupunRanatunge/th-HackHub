import { Component } from '@angular/core';
  // import { AuthService} from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: `navbar.component.html`,
})
export class NavbarComponent  {
  btn1 = 'Home';
  btn2 = 'Hackathons';
  // constructor(public auth: AuthService) {}
}
