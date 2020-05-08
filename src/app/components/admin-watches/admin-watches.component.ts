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
  montres:Montre[];
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

  editWatch(id:number){
    this.router.navigate([`editwatch/${id}`]);
    console.log("my id is",id);
      }

  deleteWatch(montre:Montre){
    console.log("my watch is",montre);
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
      res =>{
        this.montres=res;
        console.log("res is",res);
      }
    )
  }

  searchWatch(){
    this.term=document.getElementById("search-input-montre").nodeValue;
    this.montreService.searchMontre(this.term).subscribe(
      res => {
        console.log("res of search watchs is",res);
        
      }
    )
  }
   
}
