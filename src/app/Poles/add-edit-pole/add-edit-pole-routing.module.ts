import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditPolePage } from './add-edit-pole.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditPolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditPolePageRoutingModule {}
