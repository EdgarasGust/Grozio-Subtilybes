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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slidingText', [
      transition(':enter', [
        query('#one', style({ opacity: 0, transform: 'translateY(30px)' })),
        query(
          '#one',
          stagger('800ms', [
            animate(
              '900ms 2.5s ease-out',
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
            animate('400ms 3s ease-out', style({ opacity: 1 })),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChildren('anim', { read: ElementRef })
  state: any;

  constructor() {}

  ngOnInit(): void {}
}
