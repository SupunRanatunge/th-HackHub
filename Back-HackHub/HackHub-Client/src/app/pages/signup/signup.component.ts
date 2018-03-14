import { Component } from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: `signup.component.html`,
})
export class SignupComponent {
  name : String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidationsService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ){

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
        return false;
    }
    this.authService.registerUser(user).subscribe(data =>{
      if(data.success){

        this.router.navigate(['/LoginHackHub'])
        // this.flashMessage.show("You are now registered", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/register'])
      }
    })


  }



}
