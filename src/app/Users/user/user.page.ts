import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from 'src/app/Models/Usermodel';
import { DataAccessibilityService } from 'src/app/Services/data-accessibility.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: Usermodel[];

  constructor(private userService: UserService, private http: HttpClient, 
    private das: DataAccessibilityService, private route: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(result=>{
      this.users = result;
      console.log(this.users);
    },
    error=>{
      this.presentToast("Error while retrieving users");
    });
  }

  edit(data: Usermodel){
    this.das.setUserData(data);
    this.route.navigate(["edit-user"]);
    console.log(data);
  }

  delete(data: Usermodel){
    console.log(data);
    this.userService.deleteUser(data.id).subscribe(result=>{
      this.presentToast("User deleted successfully");
      this.getAllUser();
    },
    error=>{
      this.presentToast("Error while deleting user");
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
