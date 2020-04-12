import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

fName:String="iheb";
lName:String="baklouti";
fullName:String;
lengthFullName:number;
res:string;

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.fullName=this.concatFullName(this.fName,this.lName);
    this.lengthFullName=this.fullName.length;
  }

  //Method goTopath qui assure la naviguation vers le path indiqué
  goTosignup(){
    this.router.navigate(["signup"])
    /*[]:pour indiquer la possilité de saisir plusieurs path non un seul 
    ép à en js window.location("")*/
  }

  concatFullName(a:String,b:String):String {
    return(a+" "+b);
  }
  lFullName(a:string){
    this.res=(a.length>20)? "red" : "blue" ;
    return this.res;
  }

}
