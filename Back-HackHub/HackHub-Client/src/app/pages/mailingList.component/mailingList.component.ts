import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'app-mailingList',
  templateUrl: `mailingList.component.html`,


})
export class MailingListComponent implements OnInit{
  users: any;
  email: String;
  user: any;
  mailPassword: String;

  constructor(private authService: AuthService){}

  sendEmails() {
    const email = this.email;
    console.log('Your email was sent  \n'+ email)
  }
  enterMailPassword(){
    const mailPassword = this.mailPassword
  }

  ngOnInit(){
    this.authService.getUsers().subscribe(profile => {
      this.users = profile;
    },err =>{
      console.log(err);
      return false;
    });
    this.authService.getProfile().subscribe(profile => {

      this.user = profile.user;
    },err =>{
      console.log(err);
      return false;
    })
  }


}
