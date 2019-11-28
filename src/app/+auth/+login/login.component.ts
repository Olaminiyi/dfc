import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';

import { UsersService } from 'app/dfc/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  
  email = '';
  password = '';
  constructor(public router: Router, public UserService:UsersService) { }

  
  ngOnInit() {
  }

    tryLogin(){
      this.UserService.login(
        this.email,
        this.password
      )
      .subscribe(
        r=>{
          console.log(r);
          if(r.token){
            
            this.UserService.setToken(r.token);
            this.router.navigateByUrl('/dfc/users')
          }
        },
        r=>{
          alert(r.error.error );
        });
      
    }


  // login(event){
  //   event.preventDefault();
  //   this.router.navigate(['/dfc/users'])
  // }

}
