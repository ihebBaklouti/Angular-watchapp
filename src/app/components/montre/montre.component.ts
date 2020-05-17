import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/watch.service';

@Component({
  selector: 'app-montre',
  templateUrl: './montre.component.html',
  styleUrls: ['./montre.component.css']
})
export class MontreComponent implements OnInit {
montres:any;
  constructor(
    private montreService : MontreService
  ) { }

  ngOnInit(): void {
    this.montreService.getMontres().subscribe(
(data)=>{
this.montres=data;
console.log("montres are", this.montres);

}

    );

   /*  this.montres=[
      {'id':  1,  'price':  200 , 'name':' watch', 'marque': 'Swatch' , 'image': 'assets/images/product/product6.jpg', 'image2': 'assets/images/product/product6-1.jpg' , 'description': 'Persistent 1' },
      {'id':  2,  'price':  300 , 'name':' watch', 'marque': 'Festina', 'image': 'assets/images/product/product9.jpg', 'image2': 'assets/images/product/product9-1.jpg' , 'description': 'Persistent 2' }
    ] */
  }

}
