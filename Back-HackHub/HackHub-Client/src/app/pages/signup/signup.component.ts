import { Component } from '@angular/core';
import {ValidationsService} from '../../services/validations.service';




@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: `signup.component.html`,
})
export class SignupComponent {
  name : String;
  email: String;
  password: String;

  constructor(private validateService: ValidationsService){

  }
  signUpClick() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    if(!this.validateService.validateSignUp(user)) {
        console.log("Please fill in all the blanks")
        return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      console.log("Your email is not valid")
    }
  }



}
