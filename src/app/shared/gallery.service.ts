import { Injectable } from '@angular/core';

import 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  visibleImages: any[] = [];
  filteredImages: any[] = [];

  images = [
    { id: 1, category: 'Permanentas', url: '../../assets/mainTest.png' },
    {
      id: 2,
      category: 'BKlasika',
      url: '../../../assets/mainPage/Blakstienu-priauginimas1.jpeg',
    },
    {
      id: 3,
      category: 'Depiliacija',
      url: '../../../assets/mainPage/Ilgalaikis-maiazas.jpg',
    },
    {
      id: 4,
      category: 'BKlasika',
      url: '../../../assets/mainPage/Ilgalaikis-maiazas.jpg',
    },
    {
      id: 5,
      category: 'BKlasika',
      url: '../../../assets/mainPage/Blakstienu-priauginimas.jpg',
    },
    {
      id: 6,
      category: 'BKlasika',
      url: '../../../assets/mainPage/Ilgalaikis-maiazas.jpg',
    },
    {
      id: 7,
      category: 'Depiliacija',
      url: '../../../assets/mainPage/Ilgalaikis-maiazas.jpg',
    },
  ];

  constructor() {}

  getImages() {
    return (this.visibleImages = this.images.slice(0));
  }

  getImage(id: number) {
    return this.images.slice(0).find((image) => image.id == id);
  }

  getFilteredImage(category: string) {
    return this.images
      .slice(0)
      .filter((image: any) => image.category == category);
  }
}
