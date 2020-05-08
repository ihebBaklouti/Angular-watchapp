import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/validators/mustMatch';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userForm: FormGroup;
  user: User;
  id : number;
  somme : number
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {this.user = new User(this.id, '', '', '', '', '', '', '');
  this.createForm(); }

  createForm() {
    this.userForm = this.fb.group({
       firstName: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(2)] ],
       lastName: ['', Validators.required ],
       email: ['',[Validators.required, Validators.email]],
       password: ['',[Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]
      ],
        confirmPassword: ['', Validators.required] }
        , 
        {
          validator: MustMatch('password', 'confirmPassword')
        
        });
      }
  submitForm(user: any) {
    console.log("Object : ", this.userForm.value);
     this.userService.addUser(user).subscribe(
      result => {
        console.log("Added",result);
        this.router.navigate(['/admin']);
       }
     )
  }

}
