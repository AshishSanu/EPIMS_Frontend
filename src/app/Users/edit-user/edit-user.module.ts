import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUserPageRoutingModule } from './edit-user-routing.module';

import { EditUserPage } from './edit-user.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { UserRoleService } from 'src/app/Services/user-role.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    EditUserPageRoutingModule
  ],
  declarations: [EditUserPage],
  providers:[
    UserService,
    HttpClient,
    // DataAccessibilityService,
    UserRoleService
  ]
})
export class EditUserPageModule {}
