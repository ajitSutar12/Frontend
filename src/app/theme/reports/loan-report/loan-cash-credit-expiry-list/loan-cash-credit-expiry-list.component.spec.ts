import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCashCreditExpiryListComponent } from './loan-cash-credit-expiry-list.component';

describe('LoanCashCreditExpiryListComponent', () => {
  let component: LoanCashCreditExpiryListComponent;
  let fixture: ComponentFixture<LoanCashCreditExpiryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCashCreditExpiryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCashCreditExpiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
