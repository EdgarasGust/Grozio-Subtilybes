import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { GalleryImageService } from '../gallery-image.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class GalleryComponent implements OnInit {
  isLoading: boolean = false;
  isSubmited: boolean;
  selectedImage: any;
  imageSrc: string;
  downloadURL: Observable<string>;

  formTemplate = new FormGroup({
    category: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  constructor(
    private storage: AngularFireStorage,
    private imageService: GalleryImageService
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  showImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imageSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imageSrc = '/assets/images/upload.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: any) {
    this.isSubmited = true;
    this.isLoading = true;
    if (this.formTemplate.valid) {
      const filePath = `${this.formTemplate.value.category}/${this.selectedImage.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedImage);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe((url) => {
              formValue['imageUrl'] = url;
              formValue['imageId'] = this.selectedImage.name;
              this.imageService.insertImageDetails(formValue);

              this.resetForm();
            });
          })
        )
        .subscribe({
          error: (e) => {
            alert(`There was an error. Error message: ${e.message}`);
            this.resetForm();
          },
        });
    }
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: '',
      category: '',
    });
    this, (this.imageSrc = '/assets/images/upload.jpg');
    this.selectedImage = null;
    this.isSubmited = false;
    this.isLoading = false;
  }
}
