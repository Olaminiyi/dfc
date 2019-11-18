import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule } from '@angular/forms';

import {  NewUserComponent } from './newuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({

  declarations: [NewUserComponent],

  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
  //  BrowserAnimationsModule
  ],
  exports: [ NewUserComponent]
 
  
})
export class NewUserModule { }
