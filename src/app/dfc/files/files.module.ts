import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {  filesComponent } from './files.component';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { filesRoutingModule } from './files-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,

    filesRoutingModule,
  ],
  declarations: [ filesComponent ]
})
export class filesModule { }
