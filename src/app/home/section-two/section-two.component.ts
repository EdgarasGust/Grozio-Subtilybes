import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IntersectionObserverService } from 'src/app/shared/IntersectionObserverService';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
  animations: [
    trigger('fadeIn', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('* => *', animate('1000ms')),
      // transition('hide => show', animate('3000ms ease-in')),
    ]),
  ],
})
export class SectionTwoComponent implements OnInit, AfterViewInit, OnDestroy {
  state = 'show';
  isIntersecting = false;
  destroySub: any = Subscription;

  constructor(private service: IntersectionObserverService) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.destroySub = this.service.sectionTwo.subscribe((value) => {
      this.isIntersecting = value;
      // console.log('the value is: ' + value);
    });
  }

  ngOnDestroy(): void {
    this.destroySub.unsubscribe();
  }
}
