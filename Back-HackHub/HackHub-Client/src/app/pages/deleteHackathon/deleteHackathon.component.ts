import { Component } from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {HackathonService} from '../../services/hackathon.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-delete-hackathon',
  templateUrl: 'deleteHackathon.component.html',
  styles: [`
    .form-group {
      margin-top: 60px;
    }
    .form-control {
      margin-bottom: -25px;
    }
  `]
})
export class DeleteHackathonComponent  {
  name: String;

  constructor( private validateService: ValidationsService,
               private flashMessage: FlashMessagesService,
               private hackService: HackathonService,
               private router: Router) {


  } deleteHackathon() {

    const hackName = {
      name: this.name
    };

    if(!this.validateService.validateName(hackName)){
      this.flashMessage.show("Enter the Hackathon name you want to delete",{cssClass: 'alert-danger',timeout: 3000})
      return false;
    }
    this.hackService.deleteHackathon(hackName).subscribe(data =>{

      // console.log("data: "+data);
      // if(data.success){
      //   alert("Hackathon is deleted");
      //   this.router.navigate(['/hackathons'])
      //   // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      // }else{
      //   this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
      //   this.router.navigate(['/deleteHackathon'])
      // }
    })


  }
}
