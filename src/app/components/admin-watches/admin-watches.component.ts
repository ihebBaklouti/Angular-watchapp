import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/watch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-watches',
  templateUrl: './admin-watches.component.html',
  styleUrls: ['./admin-watches.component.css']
})
export class AdminWatchesComponent implements OnInit {
  montres:any;
  montre:Montre;
  term : any;
  /* id:number */
  constructor(
    private router : Router,
    private montreService:MontreService,
  ) { }

  ngOnInit(): void {
    this.getAllMontres();
  }

  watchDisplay(id:number){
this.router.navigate([`montres/${id}`]);
console.log("my id is",id);
  }

  editWatch(id:string){
    this.router.navigate([`editwatch/${id}`]);
    console.log("my id is",id);
      }

  deleteWatch(montre:Montre){
    console.log("my watch is",montre);
    console.log("my watch is",montre._id);
    /* this.id=montre.id; */
    this.montreService.deleteMontre(montre).subscribe(
      result =>    {
        console.log("this is my result", result);
        this.getAllMontres();
      }
    )
  }

  getAllMontres(){
    this.montreService.getMontres().subscribe(
      data =>{
        this.montres=data;
        console.log("data is",data);
      }
    )
  }
  
}
