import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/Services/user-role.service';
import { UserRoleModel } from 'src/app/Models/UserRoleModel';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.page.html',
  styleUrls: ['./user-roles.page.scss'],
})
export class UserRolesPage  implements OnInit {
  userRoles : UserRoleModel[];  

  constructor(private userRoleService: UserRoleService, private toastController: ToastController) { 
  }

  ngOnInit() {
    this.getUserRoles();
  }

  getUserRoles(){
    this.userRoleService.getAllUserRoles().subscribe(result=>{
      this.userRoles = result;
      console.log(this.userRoles);
    }); 
  }

  delete(data: UserRoleModel){
    console.log(data);
    this.userRoleService.deleteUserRole(data.id).subscribe(result=>{
      console.log(result)
      if(result["id"]>0){
        this.presentToast("User Role '"+result["userCode"]+"' deleted successfully.");
        this.getUserRoles();
      }
    },
    error=>{
      this.presentToast("error");
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
