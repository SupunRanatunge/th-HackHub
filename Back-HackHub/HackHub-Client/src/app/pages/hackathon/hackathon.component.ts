import { Component, OnInit, Pipe} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';
import {AuthService} from '../../services/auth.service';
// import { AddnewsComponent} from '../addNews/addnews.component';

// @Pipe({
//   name: 'reverse'
//
// })
// export class ReversePipe {
//   transform(value){
//     return value.slice().reverse();
//   }
// }
@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,

})
export class HackathonComponent implements OnInit{
  hackathons: any;
  user: any;
  token: any;



  constructor(private hackService: HackathonService,
              private authService: AuthService
              // private popup: Popup
              ){}



  createHackathon() {
    alert('Now Create your Hackathon');
  }
  updateHackathon() {
    alert('Now Update your Hackathons');
  }
  deleteHackathon() {
    alert('Delete your Hackathon');
  }

  addNews(hackathon) {
    console.log(hackathon.name);
  }



  ngOnInit(){

    this.hackService.getHackathon().subscribe(profile => {
      this.hackathons = profile;
    },err =>{
      console.log(err);
      return false;
    });

    this.token = localStorage.getItem('id_token');
    if(this.token){
      console.log(this.token);
      this.authService.getProfile().subscribe(profile => {

        this.user = profile.user;
        console.log(this.user);
      },err =>{
        console.log(err);
        return false;
      })
    }


    }





}
