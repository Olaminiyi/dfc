import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { usersComponent } from './users.component';

const routes: Routes = [{
  path: '',
  component: usersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class usersRoutingModule { }
