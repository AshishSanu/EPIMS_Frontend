import { Component, OnInit } from '@angular/core';
import { Usermodel } from 'src/app/Models/Usermodel';
import { UserService } from 'src/app/Services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

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
    
    this.userService.createUser(JSON.parse(JSON.stringify(this.user)));

    console.log(this.user);
  }

}
