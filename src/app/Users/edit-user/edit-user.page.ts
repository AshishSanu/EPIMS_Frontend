import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { HttpClient } from '@angular/common/http';
import { DataAccessibilityService } from 'src/app/Services/data-accessibility.service';
import { Router } from '@angular/router';
import { UserRoleModel } from '../../Models/UserRoleModel';
import { UserRoleService } from 'src/app/Services/user-role.service';
import { Usermodel } from 'src/app/Models/Usermodel';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  userId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: Date;
  mobile: number;
  email: string;
  password: string;
  address: string;
  roleId: number = 0;
  userRoles: UserRoleModel[];
  user: Usermodel = new Usermodel();
  updatedUser: Usermodel = new Usermodel();

  // compareWithFn = (o1: UserRoleModel, o2: UserRoleModel) => {
  //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
  // };

  // compareWith = this.compareWithFn;

  constructor(private userService: UserService, private http: HttpClient, 
    private das: DataAccessibilityService, private route: Router,
    private userRoleService: UserRoleService, private toastController: ToastController) { }

  ngOnInit() {
    this.user = this.das.getUserData();
    console.log(this.das.user);
    this.getUserRoles();
    this.setValues();
   
  }

  setValues(){
    // if(this.user)
    this.userId = this.user.id;
    this.firstName = this.user.firstName;
    this.middleName = this.user.middleName; 
    this.lastName = this.user.lastName;
    this.dob = this.user.dob;
    this.mobile = this.user.mobile;
    this.email = this.user.email;
    this.address = this.user.address;
    this.roleId = this.user.userRoleId;
  }

  getUserRoles(){
    this.userRoleService.getAllUserRoles().subscribe(res=>{
      this.userRoles = res;
    });
  }

  update(){
    this.updatedUser.id = this.userId;
    this.updatedUser.firstName = this.firstName;
    this.updatedUser.middleName = this.middleName;
    this.updatedUser.lastName = this.lastName;
    this.updatedUser.dob = this.dob;
    this.updatedUser.mobile = this.mobile;
    this.updatedUser.email = this.email;
    this.updatedUser.address = this.address;
    this.updatedUser.userRoleId = parseInt(this.roleId.toString());
    this.updatedUser.password = this.user.password;
    this.updatedUser.isActive = true;
    console.log(this.updatedUser);

    this.userService.updateUser(this.updatedUser.id, this.updatedUser).subscribe(res=>{
        this.presentToast("User updated successfully");
    },
    error=>{
      this.presentToast("Error occured while updating user");
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
