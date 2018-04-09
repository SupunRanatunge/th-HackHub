import { Component } from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-addAdmin',
  templateUrl: `addAdmin.component.html`,
})
export class AddAdminComponent {
  name : String;
  email: String;
  contact: String;
  password: String;


  constructor(
    private validateService: ValidationsService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ){

  }
  addAdmin() {

    const admin = {
      name: this.name,
      email: this.email,
      contact: this.contact,
      password: this.password

    };
    if(!this.validateService.validateAddAdmin(admin)) {      //Make sure name, email and password are entered
      this.flashMessage.show("Please fill in all the blanks", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    if(!this.validateService.validateEmail(admin.email)){        //validate the email
      this.flashMessage.show("Your email is not valid", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.authService.registerAdmin(admin).subscribe(data =>{
      if(data.success){
        alert("New Admin added");
        // this.flashMessage.show("You are now registered", {cssClass: 'alert-success',timeout: 3000});
        this.router.navigate(['/Profile']);

      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/register'])
      }
    })


  }



}
