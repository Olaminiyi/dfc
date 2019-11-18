import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { filesComponent } from './files.component';

const routes: Routes = [{
  path: '',
  component: filesComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class filesRoutingModule { }
