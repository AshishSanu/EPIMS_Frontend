import { Component, OnInit } from '@angular/core';
import { PoleModel } from 'src/app/Models/PoleModel';
import { DataAccessibilityService } from 'src/app/Services/data-accessibility.service';
import { PolesService } from 'src/app/Services/poles.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-pole',
  templateUrl: './add-edit-pole.page.html',
  styleUrls: ['./add-edit-pole.page.scss'],
})
export class AddEditPolePage implements OnInit {

  pole : PoleModel = new PoleModel();
  id: number = 0;
  manufacturer: string = null;
  poletype: string = null;
  price: number = 0;
  formTitle: string;

  constructor(private das: DataAccessibilityService, private poleService: PolesService,
    private toastController: ToastController, private geolocation: Geolocation) { }

  ngOnInit() {
    if(this.das.IsEditing){
      this.formTitle = "Edit Pole";
      this.id = this.das.pole.id;
      this.manufacturer = this.das.pole.manufacturer;
      this.poletype = this.das.pole.poletype;
      this.price = this.das.pole.price;
    }else{
      this.pole = new PoleModel();
      this.formTitle = "Add Pole";
    }
  }

  processForm(){
    if(this.das.IsEditing){
      this.edit();
    }else{
      this.addNewPole();
    }
  }

  addNewPole(){
    this.pole.poletype = this.poletype;
    this.pole.manufacturer = this.manufacturer;
    this.pole.price = parseInt(this.price.toString());
    console.log(this.pole);
    this.poleService.createPole(this.pole).subscribe(res=>{
      this.presentToast("Pole Added Successfully");
    },
    error=>{
      this.presentToast("Error");
    });
  }

  edit(){
    this.pole.id = this.id;
    this.pole.manufacturer = this.manufacturer;
    this.pole.poletype = this.poletype;
    this.pole.price = parseInt(this.price.toString());
    console.log(this.pole);
    this.poleService.updatePole(this.id, this.pole).subscribe(res=>{
      this.presentToast("Successfully Edited.")
    },
    error=>{
      this.presentToast("Error while editing.")
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
