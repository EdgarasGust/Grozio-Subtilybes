import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit, OnDestroy {
  @Input() pageLoaded: boolean = false;
  timer: boolean = false;
  timerSub: Subscription;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.pageLoaded == true) {
      this.timerSub = timer(9000).subscribe(() => {
        this.timer = true;
      });
    }
  }

  onOrderButtonClicked() {
    this.timer = false;
    this.router.navigate(['/services/gift-card']);
  }

  onClose() {
    this.timer = false;
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
