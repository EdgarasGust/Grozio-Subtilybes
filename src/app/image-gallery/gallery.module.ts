import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

// import { ImageFilterPipe } from '../shared/filter.pipe';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailComponent } from './swiper/detail.component';
import { ImageGalleryComponent } from './image-gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { GalleryComponent } from './image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    ImageGalleryComponent,
    CarouselComponent,
    DetailComponent,
    AuthComponent,
    SpinnerComponent,
    GalleryComponent,
  ],
  exports: [
    ImageGalleryComponent,
    CarouselComponent,
    DetailComponent,
    AuthComponent,
    SpinnerComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SwiperModule,
    NgbModule,
    GalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
  ],

  providers: [],
})
export class GalleryModule {}
