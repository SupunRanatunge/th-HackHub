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

  constructor(private authService: AuthService){}

  sendEmails() {
    const email = this.email;
    console.log('Your email was sent  \n'+ email)
  }

  ngOnInit(){
    this.authService.getUsers().subscribe(profile => {
      this.users = profile;
    },err =>{
      console.log(err);
      return false;
    });
  }


}
