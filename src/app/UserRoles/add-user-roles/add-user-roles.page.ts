import { Component, OnInit } from '@angular/core';
import { UserRoleModel } from 'src/app/Models/UserRoleModel';
import { Router } from '@angular/router';
import { UserRoleService } from 'src/app/Services/user-role.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-user-roles',
  templateUrl: './add-user-roles.page.html',
  styleUrls: ['./add-user-roles.page.scss'],
})
export class AddUserRolesPage implements OnInit {
  userRole: string;
  newUser: UserRoleModel = new UserRoleModel();
  constructor(private router: Router, private userRoleService: UserRoleService, private toastController: ToastController) {
   }

  ngOnInit() {
  }

  processForm(){
    console.log(this.userRole)
    this.newUser.id = 0;
    this.newUser.userCode = this.userRole;
    this.userRoleService.postUserRole(this.newUser).subscribe(res=>{
      if(res){
        console.log(res);
        this.presentToast("User Role Added Successfully");
        this.router.navigate(['/user-roles']);
      }
    },
    error=>{
      this.presentToast("Error while adding user role.");
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
