import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRolesPageRoutingModule } from './user-roles-routing.module';

import { UserRolesPage } from './user-roles.page';
import { UserRoleService } from 'src/app/Services/user-role.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    UserRolesPageRoutingModule
  ],
  declarations: [UserRolesPage],
  providers:[
    UserRoleService,
    HttpClient
  ]
})
export class UserRolesPageModule {}
