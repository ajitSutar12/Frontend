import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPaymentTransactionPassingComponent } from './found-payment-transaction-passing.component';

describe('FoundPaymentTransactionPassingComponent', () => {
  let component: FoundPaymentTransactionPassingComponent;
  let fixture: ComponentFixture<FoundPaymentTransactionPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundPaymentTransactionPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundPaymentTransactionPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
