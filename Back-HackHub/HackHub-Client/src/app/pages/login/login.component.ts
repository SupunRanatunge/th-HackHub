import { Component } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: `login.component.html`,
})
export class LoginComponent  {
  email: String;
  password: String;
  userType: String;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessageService: FlashMessagesService){
  }

  loginClick() {
    const userType = this.userType;
    console.log(userType);
    if(userType== "Student") {
      const user = {

        email: this.email,
        password: this.password
      };

      this.authService.authenticateUser(user).subscribe(data => {

        if (data.success) {

          this.authService.storeUserData(data.token, data.user);
          console.log(data.token);
          alert("You are now logged in");
          // this.flashMessageService.show("You are now logged in", {
          //   cssClass: 'alert-success',
          //   timeout:  5000});
          this.router.navigate(['/']);

        } else {
          this.flashMessageService.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000
          });
          this.router.navigate(['LoginHackHub']);
        }

      })

    }if(userType=="Admin"){
      const admin ={

        email: this.email,
        password: this.password
      };

      this.authService.authenticateAdmin(admin).subscribe(data => {

        if(data.success){

          this.authService.storeAdminData(data.token, data.admin);
          console.log(data.token);
          alert("You are now logged in");
          // this.flashMessageService.show("You are now logged in", {
          //   cssClass: 'alert-success',
          //   timeout:  5000});
          this.router.navigate(['/']);

        }else{
          this.flashMessageService.show(data.msg, {
            cssClass: 'alert-danger',
            timeout:  5000});
          this.router.navigate(['LoginHackHub']);
        }

      })



    }
  }


}
