import { Component, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'app-pop-up',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class NewUserComponent {
  @Input() isOpen = false;
}
