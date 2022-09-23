import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition('* => *', [
        query('.anime', style({ opacity: 0, transform: 'translateX(-240px)' })),
        query(
          '.anime',
          stagger('500ms', [
            animate(
              '800ms ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  state = true;

  constructor() {}

  ngOnInit(): void {}
}
