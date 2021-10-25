import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositLoanInterestRateEditChangeComponent } from './deposit-loan-interest-rate-edit-change.component';

describe('DepositLoanInterestRateEditChangeComponent', () => {
  let component: DepositLoanInterestRateEditChangeComponent;
  let fixture: ComponentFixture<DepositLoanInterestRateEditChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositLoanInterestRateEditChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositLoanInterestRateEditChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
