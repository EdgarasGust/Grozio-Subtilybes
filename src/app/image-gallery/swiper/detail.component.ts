import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-swiper',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('swiperRef', { static: false }) swiper?: SwiperComponent;

  @Input() visibleImages: any[] = [];
  @Input() index: number = 1;

  private navigatingBack: Subject<void> = new Subject<void>();
  constructor() {}

  ngOnInit(): void {
    // This will prevent from navigating back
    history.pushState(null, '');
    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.navigatingBack))
      .subscribe((_) => {
        history.pushState(null, '');
      });
  }

  ngAfterViewInit(): void {
    if (this.swiper) {
      this.swiper.swiperRef.slideTo(this.index, 0);
    }
  }
  ngOnDestroy(): void {
    this.navigatingBack.unsubscribe();
  }
}
