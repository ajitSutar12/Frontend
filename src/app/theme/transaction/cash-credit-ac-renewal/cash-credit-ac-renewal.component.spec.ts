import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashCreditAcRenewalComponent } from './cash-credit-ac-renewal.component';

describe('CashCreditAcRenewalComponent', () => {
  let component: CashCreditAcRenewalComponent;
  let fixture: ComponentFixture<CashCreditAcRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashCreditAcRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashCreditAcRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
