import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { SwiperModule } from 'swiper/angular';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './image-gallery/carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SectionOneComponent } from './home/section-one/section-one.component';
import { SectionTwoComponent } from './home/section-two/section-two.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { ServicesComponent } from './services/services.component';
import { CostComponent } from './cost/cost.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageFilterPipe } from './shared/filter.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailComponent } from './image-gallery/swiper/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PermanentComponent } from './services/permanent/permanent.component';
import { HenaComponent } from './services/hena/hena.component';
import { EyelashesComponent } from './services/eyelashes/eyelashes.component';
import { WaxingComponent } from './services/waxing/waxing.component';
import { LashLaminationComponent } from './services/lash-lamination/lash-lamination.component';
import { EyebrowLaminationComponent } from './services/eyebrow-lamination/eyebrow-lamination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutMeComponent,
    ServicesComponent,
    CostComponent,
    ImageGalleryComponent,
    ImageFilterPipe,
    ContactsComponent,
    DetailComponent,
    PageNotFoundComponent,
    PermanentComponent,
    HenaComponent,
    EyelashesComponent,
    WaxingComponent,
    LashLaminationComponent,
    EyebrowLaminationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SwiperModule,
    LayoutModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsM7qpF7GDixvy5TxqIz7AilHt2YfjViU',
    }),
  ],
  providers: [ImageFilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
