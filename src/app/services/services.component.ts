import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags(
      [
        { name: 'description', content: 'Grožio subtilybes - Paslaugos' },
        {
          name: 'keywords',
          content:
            'Blakstienu priauginimas, Permanentas, Depiliacija, Antakiai, Kauans',
        },
      ],
      true
    );
  }
}
