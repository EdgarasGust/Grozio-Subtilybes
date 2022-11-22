import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SectionOneComponent } from './home/section-one/section-one.component';
import { SectionTwoComponent } from './home/section-two/section-two.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { CostComponent } from './cost/cost.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PermanentComponent } from './services/permanent/permanent.component';
import { HenaComponent } from './services/hena/hena.component';
import { EyelashesComponent } from './services/eyelashes/eyelashes.component';
import { WaxingComponent } from './services/waxing/waxing.component';
import { LashLaminationComponent } from './services/lash-lamination/lash-lamination.component';
import { EyebrowLaminationComponent } from './services/eyebrow-lamination/eyebrow-lamination.component';
import { environment } from '../environments/environment';
import { GalleryModule } from '../app/image-gallery/gallery.module';
import { CouponComponent } from './services/gift-card/coupon/coupon.component';
import { GiftCardComponent } from './services/gift-card/gift-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutMeComponent,
    ServicesComponent,
    CostComponent,
    ContactsComponent,
    PageNotFoundComponent,
    PermanentComponent,
    HenaComponent,
    EyelashesComponent,
    WaxingComponent,
    LashLaminationComponent,
    EyebrowLaminationComponent,
    CouponComponent,
    GiftCardComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    GalleryModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKr2g2WCbxzZn0Jv1CnEP8AAhkwDSOm6k',
    }),
    AngularFireModule.initializeApp(environment.firebase),

    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  entryComponents: [CouponComponent],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
