import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface formData {
  username?: string | null;
  email?: string | null;
  tel?: string | number | null;
  clientName?: string | null;
  service?: string | null;
  coupon?: string | null;
  question?: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private formEndpoint: string = 'https://groziosubtilybes.lt/api/mail.php';

  constructor(private http: HttpClient) {}

  sendFormDetails(params: formData) {
    return this.http.post(this.formEndpoint, params, {
      responseType: 'text',
    });
  }
}
