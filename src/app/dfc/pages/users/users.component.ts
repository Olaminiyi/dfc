import { Component, OnInit,Input } from '@angular/core';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UsersService } from 'app/dfc/services/users.service';
import { Iusers } from 'app/dfc/interface';
import { FadeInTop } from 'app/shared/animations/fade-in-top.decorator';
import { User } from 'app/dfc/models/user';
import { UserVM } from 'app/dfc/models/adduser';




@FadeInTop()

@Component({
  selector: 'users-app',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class usersComponent implements OnInit {
  users:User[];
  user:UserVM=new UserVM();
  
  constructor(public usersService:UsersService) { }

  ngOnInit(){
        
  }

  popUpOpen = false;

  openPopUp() {
    this.popUpOpen = true;
  }

  deleteOption() {
    this.popUpOpen = false;
  }

  cancelOption() {
    this.popUpOpen = false;
  }

 getUsers(): void{
   this.usersService.getUsers()
   .subscribe(users=> (this.users = this.users))
 }

 

  add():void {

    if(!this.user.FirstName){
      return;
    }
    if(!this.user.email){
      return;
    }
    if(!this.user.password){
      return;
    }

    this.usersService.addUser(this.user.FirstName,this.user.email,this.user.password )
    .subscribe(user=>{ 
      console.log(user);
      //this.users.push(user);
    } );
    this.deleteOption()

  }
 


  
  
}


