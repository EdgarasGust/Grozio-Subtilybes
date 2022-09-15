import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HenaComponent } from './hena.component';

describe('HenaComponent', () => {
  let component: HenaComponent;
  let fixture: ComponentFixture<HenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
