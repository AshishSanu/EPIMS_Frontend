import { Injectable } from '@angular/core';
import { Usermodel } from '../Models/Usermodel';
import { PoleModel } from '../Models/PoleModel';

@Injectable({
  providedIn: 'root'
})
export class DataAccessibilityService {
  user: Usermodel;
  pole: PoleModel;
  IsEditing: boolean;

  constructor() { }

  setUserData(data: Usermodel){
    this.user = data;
  }
  
  getUserData(): Usermodel{
    return this.user;
  }

  setPoleData(data: PoleModel){
    this.pole = data;
  }

  getPoleData(): PoleModel{
    return this.pole;
  }

}
