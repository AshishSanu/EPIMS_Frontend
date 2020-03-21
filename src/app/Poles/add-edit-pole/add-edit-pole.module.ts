import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditPolePageRoutingModule } from './add-edit-pole-routing.module';

import { AddEditPolePage } from './add-edit-pole.page';
import { PolesService } from 'src/app/Services/poles.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddEditPolePageRoutingModule
  ],
  declarations: [AddEditPolePage],
  providers: [
    PolesService,
    HttpClient,
  ]
})
export class AddEditPolePageModule {}
