import { Component, OnInit } from '@angular/core';
import { PolesService } from 'src/app/Services/poles.service';
import { HttpClient } from '@angular/common/http';
import { DataAccessibilityService } from 'src/app/Services/data-accessibility.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PoleModel } from 'src/app/Models/PoleModel';

@Component({
  selector: 'app-view-poles',
  templateUrl: './view-poles.page.html',
  styleUrls: ['./view-poles.page.scss'],
})
export class ViewPolesPage implements OnInit {
  poles: PoleModel[];

  constructor(private poleService: PolesService, private http: HttpClient, 
    private das: DataAccessibilityService, private route: Router,
    private toastController: ToastController) { }


  ngOnInit() {
    this.getPoles();
  }

  getPoles(){
    this.poleService.getAllPoles().subscribe(result=>{
      this.poles = result;
      console.log(this.poles);
    },
    error=>{
      this.presentToast("Error while retrieving poles.");
    });
  }

  addPole(){
    this.das.IsEditing = false;
    this.das.pole = null;
    this.route.navigate(["add-edit-pole"]);
  }

  edit(data: PoleModel){
    this.das.setPoleData(data);
    this.das.IsEditing = true;
    this.route.navigate(["add-edit-pole"]);
    console.log(data);
  }

  delete(data: PoleModel){
    console.log(data);
    this.poleService.deletePole(data.id).subscribe(result=>{
      this.presentToast("User deleted successfully");
      this.getPoles();
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
