import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserRolesPageRoutingModule } from './add-user-roles-routing.module';

import { AddUserRolesPage } from './add-user-roles.page';
import { UserRoleService } from 'src/app/Services/user-role.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddUserRolesPageRoutingModule
  ],
  declarations: [AddUserRolesPage],
  providers:[
    UserRoleService,
    HttpClient
  ]
})
export class AddUserRolesPageModule {}
