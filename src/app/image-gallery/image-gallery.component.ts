import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

import { AuthService } from './auth/auth/auth.service';
import { GalleryImageService } from './gallery-image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  private userImages: Subscription;
  isAuthenticated = false;

  images: Observable<any[]>;
  image: any[];
  visibleImages: any[];
  index: number;
  showModal: boolean = false;
  activeClass: string = 'klasikinis';

  constructor(
    private auth: AuthService,
    private galleryService: GalleryImageService
  ) {}

  ngOnInit(): void {
    this.userSub = this.auth.user.subscribe((user) => {
      this.isAuthenticated = !!user; // !user ? false : true
    });

    this.getImages('klasikinis');
  }

  getImages(string: string) {
    this.images = this.galleryService.getImageDetailList(string).valueChanges();
    this.userImages = this.images.subscribe((list) => {
      this.visibleImages = list.map((item) => {
        return item;
      });
    });
  }

  onGalleryClick(string: string) {
    this.activeClass = string;
    this.getImages(string);
  }

  onImageClick(index: number, image: any) {
    this.showModal = true;
    this.index = index;
  }

  hideNew() {
    this.showModal = false;
  }

  onLogout() {
    this.auth.logout();
  }
  onRemove(key: string, imageId: string) {
    this.galleryService.removeItem(key, imageId);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.userImages.unsubscribe();
  }
}
