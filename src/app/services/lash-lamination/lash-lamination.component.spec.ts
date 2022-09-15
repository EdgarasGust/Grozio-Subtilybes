import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LashLaminationComponent } from './lash-lamination.component';

describe('LashLaminationComponent', () => {
  let component: LashLaminationComponent;
  let fixture: ComponentFixture<LashLaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LashLaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LashLaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
