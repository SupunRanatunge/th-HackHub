import { Component } from '@angular/core';




@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: `signup.component.html`,
})
export class SignupComponent {
  name : String;
  signUpClick() {

    console.log(this.name);
  }



}
