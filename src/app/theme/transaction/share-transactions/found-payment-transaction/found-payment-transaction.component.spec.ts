import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPaymentTransactionComponent } from './found-payment-transaction.component';

describe('FoundPaymentTransactionComponent', () => {
  let component: FoundPaymentTransactionComponent;
  let fixture: ComponentFixture<FoundPaymentTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundPaymentTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundPaymentTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
