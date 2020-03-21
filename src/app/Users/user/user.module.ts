import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    UserPageRoutingModule
  ],
  declarations: [UserPage],
  providers: [
    UserService,
    HttpClient,
    
  ]
})
export class UserPageModule {}
