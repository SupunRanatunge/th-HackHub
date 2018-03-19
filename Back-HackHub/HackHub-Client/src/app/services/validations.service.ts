import { Injectable } from '@angular/core';

@Injectable()
export class ValidationsService {

  constructor() { }

  validateSignUp(user) {
    if(user.name == undefined || user.email == undefined || user.password == undefined) {
      return false;
    }else {
      return true;
    }
  }
  validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  validateHackathon(hackathon){

    if(hackathon.name == undefined || hackathon.host == undefined || hackathon.startDate == undefined || hackathon.closeDate == undefined || hackathon.place == undefined || hackathon.price == undefined || hackathon.numbOfMems == undefined || hackathon.specialNotes == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateName(hackathon){
    if (hackathon.name == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateEvent(event){

    if(event.name == undefined || event.host == undefined || event.date == undefined || event.time == undefined || event.place == undefined || event.specialNotes == undefined){
      return false;
    }else{
      return true;
    }
  }
}
