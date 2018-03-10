import { Component } from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: `signup.component.html`,
})
export class SignupComponent {
  name : String;
  email: String;
  password: String;

  constructor(private validateService: ValidationsService, private flashMessage: FlashMessagesService){

  }
  signUpClick() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    if(!this.validateService.validateSignUp(user)) {
        this.flashMessage.show("Please fill in all the blanks", {cssClass: 'alert-danger',timeout: 3000});
        return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Your email is not valid", {cssClass: 'alert-danger',timeout: 3000});

    }
  }



}
