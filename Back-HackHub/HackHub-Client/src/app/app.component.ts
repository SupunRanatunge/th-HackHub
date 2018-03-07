import { Component } from '@angular/core';


@Component({

  selector: 'app-app',
  template: `<app-navbar></app-navbar>,
  <router-outlet></router-outlet>`,
})
export class AppComponent  {
  // constructor(private auth: AuthService) {
  // }
}

