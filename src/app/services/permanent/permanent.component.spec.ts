import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentComponent } from './permanent.component';

describe('PermanentComponent', () => {
  let component: PermanentComponent;
  let fixture: ComponentFixture<PermanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
