import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  observer: IntersectionObserver | undefined;
  sectionOne: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sectionTwo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  createAndObserve(element: ElementRef) {
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          console.log(entry, observer);
          if (
            entry.target.nodeName === 'APP-SECTION-ONE' &&
            entry.isIntersecting === true
          ) {
            this.sectionOne.next(true);
          }
          if (
            entry.target.nodeName == 'APP-SECTION-TWO' &&
            entry.isIntersecting == true
          ) {
            this.sectionTwo.next(true);
          }
        });
      },
      { threshold: 1, rootMargin: '200px' }
    );
    this.observer.observe(element.nativeElement);
  }
}
