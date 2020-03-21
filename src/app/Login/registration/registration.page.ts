import { Component, OnInit } from '@angular/core';
import { Usermodel } from 'src/app/Models/Usermodel';
import { UserService } from 'src/app/Services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  folder="Folder"
  firstName: string = null;
  middleName: string = null;
  lastName: string = null;
  dob: Date;
  mobile: string;
  email: string;
  password: string;
  address: string;

  user: Usermodel = new Usermodel();

  constructor(private userService: UserService, private toastController: ToastController) { }

  ngOnInit() { }

  processForm(event){
    console.log(this.firstName)
    this.user.id = 0;
    this.user.firstName = this.firstName;
    this.user.middleName = this.middleName;
    this.user.lastName = this.lastName;
    this.user.dob = this.dob;
    this.user.mobile = parseInt(this.mobile);
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.address = this.address;
    this.user.userRoleId = 2;     //2 for Superwiser
    this.user.isActive = true;
    
    this.userService.createUser(JSON.parse(JSON.stringify(this.user))).subscribe(res=>{
      if(res){
        this.presentToast("Registration Success.");
      }else{
        this.presentToast("Try after some time.");
      }
    }, 
    error=>{
      this.presentToast("Please check your internet.");
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
