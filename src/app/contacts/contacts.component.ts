import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { ContactFormService } from '../shared/contact-form.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  name: any = '';
  submited: boolean = false;
  isLoading: boolean = false;
  successMsg: string = '';
  errorMsg: string = '';

  form = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
    service: new FormControl('', [Validators.required]),
    question: new FormControl('', [Validators.required]),
  });

  zoom: number = 15;
  lat: number = 54.89682;
  lng: number = 23.89139;

  constructor(
    private router: Router,
    private formService: ContactFormService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.name = this.form.value.username;
    this.isLoading = true;

    this.formService.sendFormDetails(this.form.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.submited = true;
        this.successMsg = res;
      },
      error: (err) => {
        this.isLoading = false;
        this.submited = true;
        this.errorMsg = err ? err : err.message;
      },
    });

    this.successMsg = '';
    this.errorMsg = '';

    this.form.reset();
  }

  onMailSent() {
    this.name = '';
    this.submited = false;
    this.router.navigate(['/']);
  }
}
