import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // private api = 'https://mailthis.to/edgarasgustaitis@yahoo.co.uk';

  constructor(private http: HttpClient) {}

  postMessage(input: any) {
    // return this.http.post(this.api, input, { responseType: 'text' }).subscribe(
    //   (responseData) => {
    //     console.log(responseData);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}

// postMessage(input: any) {
//   return this.http
//     .post(this.api, input, { responseType: 'text' })
//     .subscribe((responseData) => {
//       console.log(responseData);
//     });
// }
//
