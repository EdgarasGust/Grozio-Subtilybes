import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  showNavigationArrows = false;
  showNavigationIndicators = true;
  sub: Subscription;

  test: any[] = [];

  images: any[] = [];

  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.sub = this.breakpointObserver
      .observe(['(min-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.images = [
            '../../../assets/carousel/Blakstienos1.webp',
            '../../../assets/carousel/Blakstienos2.webp',
            '../../../assets/carousel/Depiliacija.webp',
            '../../../assets/carousel/Blakstienos3.webp',
          ];
        } else {
          this.images = [
            '../../../assets/carousel/Blakstienos1-small.webp',
            '../../../assets/carousel/Blakstienos2-small.webp',
            '../../../assets/carousel/Depiliacija-small.webp',
            '../../../assets/carousel/Blakstienos3-small.webp',
          ];
        }
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
