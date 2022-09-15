import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

import { GalleryService } from '../shared/gallery.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit, OnChanges {
  @Input() filterBy: string = 'BKlasika';
  visibleImages: any[] = [];
  filteredImages: any[] = [];
  index: number;
  showModal: boolean = false;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.visibleImages = this.galleryService.getImages();
  }

  show(index: number) {
    this.showModal = true;
    this.index = index;
    this.filteredImages = this.galleryService.getFilteredImage(this.filterBy);
  }

  hide() {
    this.showModal = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.visibleImages = this.galleryService.getImages();
  }
}
