import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  constructor(private router: Router, private userService: UserService, private toastController: ToastController) { }

  ngOnInit() {
  }

  processForm(event){
    
    this.userService.login(this.email,this.password).subscribe(res=>{
      if(res){
        this.router.navigate(['/dashboard']);
      } else{
        this.presentToast("Incorrect Email or Password.");
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
