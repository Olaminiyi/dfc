import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersComponent } from './users.component';

import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { usersRoutingModule } from './user-routing.module';
import { NewUserModule } from '../newuser/newuser.module';



@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
   // NgbModalModule
   usersRoutingModule,
   NewUserModule

  ],
  declarations: [ usersComponent]
 
  
})
export class usersModule { }
