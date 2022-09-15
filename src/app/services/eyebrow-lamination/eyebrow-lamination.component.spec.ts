import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyebrowLaminationComponent } from './eyebrow-lamination.component';

describe('EyebrowLaminationComponent', () => {
  let component: EyebrowLaminationComponent;
  let fixture: ComponentFixture<EyebrowLaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyebrowLaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyebrowLaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
