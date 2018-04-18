import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidationsService} from '../../services/validations.service';


@Component({
  moduleId: module.id,
  selector: 'app-mailingList',
  templateUrl: `mailingList.component.html`,


})
export class MailingListComponent implements OnInit {
  users: any;
  email: String;
  user: any;
  emailPassword: String;

  constructor(private authService: AuthService,
              private validateService: ValidationsService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  sendEmails() {
    const email = this.email;
    if (email != undefined) {
      console.log('inside if')
      console.log('Your email was sent  \n' + email);
      this.authService.sendEmail(this.user, this.users, this.email).subscribe(data => {
        if (data.success) {
          alert('the email was sent');
        } else {
          this.router.navigate(['/MailingList']);
        }
      });

    } else {
      alert('Compose Your Email first');
    }


  }

  enterMailPassword() {
    const adminEmail = {
      email: this.user.email,
      emailPassword: this.emailPassword
    };
    if (!this.validateService.validateEmailPassword(adminEmail)) {     //Make sure the email password is given
      this.flashMessage.show('Please enter Your Email Password', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    this.authService.addEmailPassword(adminEmail).subscribe(data => {

      if (data.success) {
        alert('Admin Email Password is updated');
        this.router.navigate(['/MailingList']);
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      } else {
        // this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/MailingList']);
      }
    });

  }

  ngOnInit() {
    this.authService.getUsers().subscribe(profile => {
      this.users = profile;
    }, err => {
      console.log(err);
      return false;
    });
    this.authService.getProfile().subscribe(profile => {

      this.user = profile.user;
    }, err => {
      console.log(err);
      return false;
    });
  }


}
