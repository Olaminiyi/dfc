import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { usersRoutingModule } from './user-routing.module';
import { NewUserModule } from '../newuser/newuser.module';
import { UsersService } from 'app/dfc/services/users.service';
import { usersComponent } from './users.component';




@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
   // NgbModalModule
   usersRoutingModule,
   NewUserModule

  ],
  providers:[
    UsersService
  ],
  declarations: [ usersComponent]
 
  
})
export class usersModule { }
