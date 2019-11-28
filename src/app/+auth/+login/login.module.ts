import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { UsersService } from 'app/dfc/services/users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers:[UsersService,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
