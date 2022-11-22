import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactFormService } from 'src/app/shared/contact-form.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss'],
})
export class GiftCardComponent implements OnInit {
  name: any = '';
  submited: boolean = false;
  isLoading: boolean = false;
  successMsg: string = '';
  errorMsg: string = '';

  form = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    coupon: new FormControl('', [Validators.required]),
    question: new FormControl(''),
  });
  constructor(
    private fb: FormBuilder,
    private formService: ContactFormService,
    private router: Router
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
