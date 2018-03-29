import { Component, OnInit} from '@angular/core';
import {HackathonService} from '../../services/hackathon.service';
import {AuthService} from '../../services/auth.service';
import {Popup} from 'ng2-opd-popup'



@Component({
  moduleId: module.id,
  selector: 'app-hackathon',
  templateUrl: `hackathon.component.html`,
})
export class HackathonComponent implements OnInit{
  hackathons: any;
  user: any;
  token: any;
  email: String;
  password: String;

  constructor(private hackService: HackathonService,
              private authService: AuthService,
              private popup: Popup
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
  showPopup5(){
    this.popup.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack",
      color: "#A0DE4F",
      header: "Login...",
      widthProsentage:50,
      animation: "bounceInDown",
      confirmBtnContent: "Login"}
    this.popup.show(this.popup.options);
  }

  YourConfirmEvent(){
    alert('You cliked confirm');
    this.popup.hide();
  }

  login(){
    alert('Email: ' + this.email + '  Password: ' + this.password);
    this.popup.hide();
  }




}
