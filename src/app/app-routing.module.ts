import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CostComponent } from './cost/cost.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EyebrowLaminationComponent } from './services/eyebrow-lamination/eyebrow-lamination.component';
import { EyelashesComponent } from './services/eyelashes/eyelashes.component';
import { GiftCardComponent } from './services/gift-card/gift-card.component';
import { HenaComponent } from './services/hena/hena.component';
import { LashLaminationComponent } from './services/lash-lamination/lash-lamination.component';
import { PermanentComponent } from './services/permanent/permanent.component';
import { ServicesComponent } from './services/services.component';
import { WaxingComponent } from './services/waxing/waxing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Grozio Subtilybes',
      description:
        'Blakstienų priauginimas:Klasikinės,Mix,Volume,Kim Kardashian.Ilgalaikis/Permanentinis makiažas.Depiliacija vašku.Antakių dažymas.Blakstienų laminavimas.Kaunas, Senamiestis',
      ogTitle: 'Grozio Subtilybes',
    },
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./image-gallery/gallery.module').then((m) => m.GalleryModule),
  },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/permanent-makeup', component: PermanentComponent },
  { path: 'services/hena', component: HenaComponent },
  { path: 'services/eylash-extension', component: EyelashesComponent },
  { path: 'services/waxing', component: WaxingComponent },
  { path: 'services/eyelash-lamination', component: LashLaminationComponent },
  {
    path: 'services/eyebrow-lamination',
    component: EyebrowLaminationComponent,
  },
  {
    path: 'services/gift-card',
    component: GiftCardComponent,
  },
  { path: 'cost', component: CostComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
