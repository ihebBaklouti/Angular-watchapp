import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Montre } from '../models/montre';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  montres: Montre[];
  users: User[];
  constructor(
   

  ) {}

  createDb(){

    let  montres=  [
      {'id':  1,  'price':  200 , 'name':' watch', 'marque': 'Swatch' , 'image': 'assets/images/product/product6.jpg', 'image2': 'assets/images/product/product6-1.jpg' , 'description': 'Persistent 1' },
      {'id':  2,  'price':  300 , 'name':' watch', 'marque': 'Festina', 'image': 'assets/images/product/product9.jpg', 'image2': 'assets/images/product/product9-1.jpg' , 'description': 'Persistent 2' }
    ];

    let  users=  [
      {id:  1,  fName:  'iheb', lName:'bak', email: 'firas@gmail.com', pwd: '1105183', confirmPwd: '1105183'  , tel: '54934780', adresse: 'bizerte'},
      {id:  2,  fName:  'ahmed', lName:'bak', email: 'aymen@gmail.com', pwd: '11051844', confirmPwd: '11051844' , tel: '55934780', adresse: 'sousse'}
     ]; 
 
    return {montres,users};

    
   }
 }

