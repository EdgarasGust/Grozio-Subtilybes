import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slidingText', [
      transition(':enter', [
        query('#one', style({ opacity: 0, transform: 'translateY(30px)' })),
        query(
          '#one',
          stagger('800ms', [
            animate(
              '800ms 2.2s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ])
        ),
      ]),
    ]),
    trigger('mainImage', [
      transition(':enter', [
        query('#two', style({ opacity: 0 })),
        query(
          '#two',
          stagger('800ms', [
            animate('400ms 2.5s ease-out', style({ opacity: 1 })),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChildren('anim', { read: ElementRef })
  state: any;

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags(
      [
        {
          name: 'description',
          content:
            'Blakstienų priauginimas:Klasikinės,Mix,Volume,Kim Kardashian.Ilgalaikis/Permanentinis makiažas.Depiliacija vašku.Antakių dažymas.Blakstienų laminavimas. Kaunas.',
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
      ],
      true
    );
  }
}
