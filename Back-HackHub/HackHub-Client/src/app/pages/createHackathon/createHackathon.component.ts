import {Component} from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {HackathonService} from '../../services/hackathon.service';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-create-hackathon',
  templateUrl: `createHackathon.component.html`,
  styles: [`
    .form-group {
      margin-top: 40px;
    }
    .form-control {
      margin-bottom: -25px;
    }
    .buttonCreate {
      margin-left:200px
    }
  `]
})
export class CreateHackathonComponent {
  name: String;
  host: String;
  startDate: String;
  closeDate: String;
  place: String;
  price: String;
  numbOfMems: String;
  specialNotes: String;

  constructor( private validateService: ValidationsService,
               private flashMessage: FlashMessagesService,
               private hackService: HackathonService,
               private router: Router) {


  }  hackathonCreate() {

    const hackathon = {
      name: this.name,
      host: this.host,
      startDate: this.startDate,
      closeDate: this.closeDate,
      place: this.place,
      price: this.price,
      numbOfMems: this.numbOfMems,
      specialNotes: this.specialNotes
    };
    if(!this.validateService.validateHackathon(hackathon)){

      this.flashMessage.show("Please fill all required blanks", {cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    this.hackService.createHackathon(hackathon).subscribe(data =>{

      if(data.success){
        alert("New Hackathon is created");
        this.router.navigate(['/hackathons'])
        // this.flashMessage.show("Hackathon is created", {cssClass: 'alert-success',timeout: 3000});
      }else{
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/createHackathon'])
      }
    });




    console.log('Hackathon is created');

  }
}
