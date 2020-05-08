import { Component, OnInit } from '@angular/core';
import { Montre} from '../../models/montre';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
montres: Montre[];
  constructor() { }

  ngOnInit(): void {
 /*    this.montres=[
      {id:1, price: 200,name:"watch", marque:"Swatch", image: "test",description:"Persistent"},
      {id:2, price: 300,name:"watch",marque:"Festina", image: "test",description:"Persistent"},
      {id:3, price: 400,name:"watch", marque:"Citizen", image: "test",description:"Persistent"},
      {id:4, price: 500,name:"watch", marque:"Rolex", image: "test",description:"Persistent"}
    ] */
  }

}
