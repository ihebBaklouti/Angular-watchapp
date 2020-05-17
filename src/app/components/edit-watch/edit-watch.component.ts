import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { ActivatedRoute, Router } from '@angular/router';
import { MontreService } from 'src/app/services/watch.service';

@Component({
  selector: 'app-edit-watch',
  templateUrl: './edit-watch.component.html',
  styleUrls: ['./edit-watch.component.css']
})
export class EditWatchComponent implements OnInit {
  montre:Montre;
  id:string;
  constructor(
    private activateRoute : ActivatedRoute,
    private watchService : MontreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id= this.activateRoute.snapshot.paramMap.get('id');
console.log('this edit my id', this.id);
this.watchService.displayMontre(this.id).subscribe(
  res => {
    this.montre=res;
    console.log('this is my watch', this.montre);
  }
)
  }

  editWatch(watch:any){
    this.watchService.updateMontre(this.montre).subscribe(
      res => {
        this.router.navigate(["/admin"])
      }
    )
  }


}
