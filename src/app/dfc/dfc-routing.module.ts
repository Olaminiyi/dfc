
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";


export const routes:Routes = [
  {
    path: 'files',
    loadChildren: './files/files.module#filesModule',
    data: {pageTitle: 'Files'}
  },
  {
    path: 'users',
    loadChildren: './users/users.module#usersModule',
    data: {pageTitle: 'Users'}
  }
  
];

export const dfcRouting = RouterModule.forChild(routes);
