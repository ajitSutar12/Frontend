import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalInterestCalculationComponent } from './penal-interest-calculation.component';

describe('PenalInterestCalculationComponent', () => {
  let component: PenalInterestCalculationComponent;
  let fixture: ComponentFixture<PenalInterestCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenalInterestCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalInterestCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
