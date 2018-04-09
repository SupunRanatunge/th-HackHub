// import { Component } from '@angular/core';
// import { AuthService} from '../../services/auth.service';
// import {FlashMessagesService} from 'angular2-flash-messages';
// import {Router} from '@angular/router';
//
//
// @Component({
//   moduleId: module.id,
//   selector: 'app-loginAdmin',
//   templateUrl: `loginAdmin.component.html`,
// })
// export class LoginAdminComponent  {
//   email: String;
//   password: String;
//
//   constructor(private authService: AuthService,
//               private router: Router,
//               private flashMessageService: FlashMessagesService){
//   }
//
//   adminLogin() {
//     const admin ={
//
//       email: this.email,
//       password: this.password
//     };
//
//     this.authService.authenticateAdmin(admin).subscribe(data => {
//
//       if(data.success){
//
//         this.authService.storeAdminData(data.token, data.admin);
//         console.log(data.token);
//         alert("You are now logged in");
//         // this.flashMessageService.show("You are now logged in", {
//         //   cssClass: 'alert-success',
//         //   timeout:  5000});
//         this.router.navigate(['/']);
//
//       }else{
//         this.flashMessageService.show(data.msg, {
//           cssClass: 'alert-danger',
//           timeout:  5000});
//         this.router.navigate(['LoginHackHub']);
//       }
//
//     })
//
//
//
//   }
// }
