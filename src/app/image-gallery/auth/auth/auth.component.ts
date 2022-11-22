import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  onFormSubmition(formData: NgForm) {
    if (!formData.valid) {
      return;
    }
    const email = formData.value.email;
    const password = formData.value.password;

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    // Login functionality
    if (this.isLoginMode) {
      authObs = this.auth.signIn(email, password);
      // Sign up functionality
    } else {
      authObs = this.auth.signUp(email, password);
    }

    authObs.subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/gallery']);
      },
      error: (errMsg) => {
        this.error = errMsg;
        this.isLoading = false;
      },
    });

    formData.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onError() {
    this.error = '';
  }
}
