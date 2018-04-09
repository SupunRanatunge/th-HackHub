import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'app-mailingList',
  templateUrl: `mailingList.component.html`,


})
export class MailingListComponent implements OnInit{
  users: any;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.getUsers().subscribe(profile => {
      this.users = profile;
    },err =>{
      console.log(err);
      return false;
    });
  }


}
