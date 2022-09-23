import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  title = 'Grozio Subtilybes';

  ngOnInit(): void {
    this.titleService.setTitle('Grožio Subtilybės');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Blakstienų priauginimas:Klasikinės,Mix,Volume,Kim Kardashian.Ilgalaikis/Permanentinis makiažas.Depiliacija vašku.Antakių dažymas.Blakstienų laminavimas.Kaunas, Senamiestis',
      },
    ]);
  }
}
