import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPolesPage } from './view-poles.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPolesPageRoutingModule {}
