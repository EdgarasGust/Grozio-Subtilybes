import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyelashesComponent } from './eyelashes.component';

describe('EyelashesComponent', () => {
  let component: EyelashesComponent;
  let fixture: ComponentFixture<EyelashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyelashesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyelashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
