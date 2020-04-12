import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  id: number;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.user = new User(0,'','','', 0 , 0 , 0 , '');
    this.userForm = this.formBuilder.group({
      fName: [''],
      lName: [''],
      email: [''],
      pwd: [''],
      confirmPwd: [''],
      tel: [''],
      adresse: ['']
    });
  }

  saveUser(user: any) {
    console.log("user is",this.user);
  }  

}
