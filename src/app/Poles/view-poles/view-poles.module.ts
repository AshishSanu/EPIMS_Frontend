import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPolesPageRoutingModule } from './view-poles-routing.module';

import { ViewPolesPage } from './view-poles.page';
import { PolesService } from 'src/app/Services/poles.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ViewPolesPageRoutingModule
  ],
  declarations: [ViewPolesPage],
  providers: [
    PolesService,
    HttpClient,
  ]
})
export class ViewPolesPageModule {}
