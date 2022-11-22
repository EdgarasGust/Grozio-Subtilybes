import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { AuthService } from './image-gallery/auth/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state: boolean = false;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private authService: AuthService
  ) {}

  title = 'Grozio Subtilybes';

  ngOnInit(): void {
    this.titleService.setTitle('Grožio Subtilybės');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Blakstienų priauginimas:Klasikinės,Mix,Volume,Kim Kardashian.Ilgalaikis/Permanentinis makiažas.Depiliacija vašku.Antakių dažymas.Blakstienų laminavimas.Kaunas, Senamiestis',
      },

      {
        name: 'keywords',
        content:
          'Blakstienų priauginimas, Ilgalaikis Makiažas, Depiliacija Vašku, Antakių Dažymas, Blakstienų Laminavimas! Kaunas - Senamiestis!',
      },

      {
        name: 'robots',
        content: 'index, follow',
      },
    ]);

    this.authService.autoLogin();
    this.state = true;
  }
}

// this.metaService.addTag(
//   {
//     name: 'description',
//     content:
//       'Blakstienų priauginimas:Klasikinės,Mix,Volume,Kim Kardashian.Ilgalaikis/Permanentinis makiažas.Depiliacija vašku.Antakių dažymas.Blakstienų laminavimas.Kaunas, Senamiestis',
//   },
//   true
// );
// this.metaService.addTag(
//   {
//     name: 'keywors',
//     content:
//       'Blakstienų priauginimas, Ilgalaikis Makiažas, Depiliacija Vašku, Antakių Dažymas, Blakstienų Laminavimas! Kaunas - Senamiestis!',
//   },
//   true
// );
// this.metaService.addTag(
//   {
//     name: 'robts',
//     content: 'index, follow',
//   },
//   true
// );
