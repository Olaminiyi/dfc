import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dfcRouting } from './dfc-routing.module';

import { UsersService } from './services/users.service';
import { FileService } from './services/files.service';
import { HttpErrorHandler } from './services/http-error-handler.service';


@NgModule({
  imports: [
    CommonModule,
    dfcRouting,

  ],
  providers:[
    FileService,
    HttpErrorHandler,
    UsersService
  ],
  declarations: [  ]
})
export class dfcModule { }
