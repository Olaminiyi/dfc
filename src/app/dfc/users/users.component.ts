import { Component, OnInit,Input } from '@angular/core';

import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@FadeInTop()

@Component({
  selector: 'users-app',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class usersComponent implements OnInit {
  
  
  constructor() { }

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




  ngOnInit() {
  }
  
}


