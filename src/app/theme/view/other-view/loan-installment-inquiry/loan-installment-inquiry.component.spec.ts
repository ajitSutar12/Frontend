import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInstallmentInquiryComponent } from './loan-installment-inquiry.component';

describe('LoanInstallmentInquiryComponent', () => {
  let component: LoanInstallmentInquiryComponent;
  let fixture: ComponentFixture<LoanInstallmentInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInstallmentInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInstallmentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
