import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MontreService } from 'src/app/services/watch.service';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-display-watch',
  templateUrl: './display-watch.component.html',
  styleUrls: ['./display-watch.component.css']
})
export class DisplayWatchComponent implements OnInit {
id:number;
watch : Montre;
  constructor(
    private watchService : MontreService,
    private activateRoute :ActivatedRoute,
  ) { }

  ngOnInit(): void {
this.id= +this.activateRoute.snapshot.paramMap.get('id');
console.log('this my id', this.id);
this.watchService.displayMontre(this.id).subscribe(
  res => {
    this.watch=res;
    console.log('this is my watch', this.watch);
  }
)

  }

}
