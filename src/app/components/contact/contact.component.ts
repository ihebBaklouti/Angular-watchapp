import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contact = new Contact(0,'', 0 , '', '');
    this.contactForm = this.formBuilder.group({
      name: [''],
      tel: [''],
      email: [''],
      message: ['']
    });
  }

  saveContact(contact: any) {
    console.log("MSG RECUE",this.contact);

}

}
