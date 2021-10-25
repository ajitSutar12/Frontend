import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositLoanAnalysisComponent } from './deposit-loan-analysis.component';

describe('DepositLoanAnalysisComponent', () => {
  let component: DepositLoanAnalysisComponent;
  let fixture: ComponentFixture<DepositLoanAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositLoanAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositLoanAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
