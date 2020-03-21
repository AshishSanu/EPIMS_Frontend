import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWorkDetailsPageRoutingModule } from './view-work-details-routing.module';

import { ViewWorkDetailsPage } from './view-work-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWorkDetailsPageRoutingModule
  ],
  declarations: [ViewWorkDetailsPage]
})
export class ViewWorkDetailsPageModule {}
