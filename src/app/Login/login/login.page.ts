import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  folder= "Folder"
  constructor(private router: Router) { }

  ngOnInit() {
  }

  processForm(event){
    this.router.navigate(['/dashboard']);
  }

}
