import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
    service: new FormControl('', [Validators.required]),
    question: new FormControl('', [Validators.required]),
  });

  zoom: number = 15;
  lat: number = 54.89682;
  lng: number = 23.89139;

  submited: boolean = false;

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    console.log(formData);
    this.submited = true;
    // this.contactService.postMessage(formData.email);
    this.signupForm.reset();
  }
  onThankYouFormSubmition() {
    this.submited = false;
    this.router.navigate(['/home']);
  }
}

// subscribe((response) => {
//   location.href = 'https://milthis.to/confirm'
//   console.log(response);
// }), error => {
//   console.error(error.response);
//   console.log(error);
// }

// onSubmit() {
//   this.submited = true;
//   this.user.username = this.signupForm.value.username;
//   this.user.email = this.signupForm.value.email;
//   this.user.tel = this.signupForm.value.tel;
//   this.user.service = this.signupForm.value.service;
//   this.user.question = this.signupForm.value.question;

//   this.contactService.postMessage(this.user);
//   this.signupForm.reset();
// }

// onSubmit(FormData) {
//   console.log(FormData)
//   this.contact.PostMessage(FormData)
//     .subscribe(response => {
//       location.href = 'https://mailthis.to/confirm'
//       console.log(response)
//     }, error => {
//       console.warn(error.responseText)
//       console.log({ error })
//     })
// }
