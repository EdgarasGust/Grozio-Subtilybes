import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CostComponent } from './cost/cost.component';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EyebrowLaminationComponent } from './services/eyebrow-lamination/eyebrow-lamination.component';
import { EyelashesComponent } from './services/eyelashes/eyelashes.component';
import { HenaComponent } from './services/hena/hena.component';
import { LashLaminationComponent } from './services/lash-lamination/lash-lamination.component';
import { PermanentComponent } from './services/permanent/permanent.component';
import { ServicesComponent } from './services/services.component';
import { WaxingComponent } from './services/waxing/waxing.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'permanent-makeup', component: PermanentComponent },
  { path: 'hena', component: HenaComponent },
  { path: 'eylash-extension', component: EyelashesComponent },
  { path: 'waxing', component: WaxingComponent },
  { path: 'eyelash-lamination', component: LashLaminationComponent },
  { path: 'eyebrow-lamination', component: EyebrowLaminationComponent },
  { path: 'cost', component: CostComponent },
  { path: 'gallery', component: ImageGalleryComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
