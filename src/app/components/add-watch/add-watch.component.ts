import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MontreService } from 'src/app/services/watch.service';


@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
  styleUrls: ['./add-watch.component.css']
})
export class AddWatchComponent implements OnInit {
  montre: Montre;
  montreForm: FormGroup;
  montres:Montre[];
  id: number;
  price:number;

  constructor(
    private montreService :MontreService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.montre = new Montre(this.id, this.price, '', '', '', '','');
    this.montreForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      marque: ['']
    });
  }

  saveMontre(montre:Montre) {
        console.log("watch added",this.montre); 
         this.montreService.addMontre(this.montre).subscribe(
          (res) =>{
            console.log("res is", res);
            this.router.navigate(["admin"]);
          }
        )


  }

}



