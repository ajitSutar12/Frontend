import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeWiseCreditLoanAmtBetTwodatesComponent } from './scheme-wise-credit-loan-amt-bet-twodates.component';

describe('SchemeWiseCreditLoanAmtBetTwodatesComponent', () => {
  let component: SchemeWiseCreditLoanAmtBetTwodatesComponent;
  let fixture: ComponentFixture<SchemeWiseCreditLoanAmtBetTwodatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeWiseCreditLoanAmtBetTwodatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeWiseCreditLoanAmtBetTwodatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
