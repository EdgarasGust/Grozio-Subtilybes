import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth/auth.component';
import { GalleryComponent } from './image-uploader/image-uploader.component';

import { ImageGalleryComponent } from './image-gallery.component';
import { AuthGuard } from './auth/auth/auth.guard';

const routes: Routes = [
  { path: '', component: ImageGalleryComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'imageUpload',
    component: GalleryComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
