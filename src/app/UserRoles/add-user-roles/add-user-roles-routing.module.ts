import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserRolesPage } from './add-user-roles.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserRolesPageRoutingModule {}
