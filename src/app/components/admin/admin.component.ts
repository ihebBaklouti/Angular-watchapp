import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users:User[] ;
  constructor(
    private userService:UserService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users=data;
      }
    )
    
    /* this.users=[
      {id:  3,  fName:  'firas', lName:'bak', email: 'firas@gmail.com', pwd: '1105183', confirmPwd: '1105183'  , tel: '54934780', adresse: 'bizerte'},
      {id:  4,  fName:  'aymen', lName:'bak', email: 'aymen@gmail.com', pwd: '11051844', confirmPwd: '11051844' , tel: '55934780', adresse: 'sousse'}
    ] */
  }

  

}
