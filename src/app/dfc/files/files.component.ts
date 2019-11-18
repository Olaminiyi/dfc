import { Component, OnInit } from '@angular/core';
import { FadeInTop } from 'app/shared/animations/fade-in-top.decorator';
//import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'file-app',
  templateUrl: './files.component.html',
})
export class filesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
