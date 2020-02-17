import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { UserService } from 'src/app/Services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage],
  providers:[
    UserService,
    HttpClient,

  ]
})
export class RegistrationPageModule {}
