import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDenominationComponent } from './payment-denomination.component';

describe('PaymentDenominationComponent', () => {
  let component: PaymentDenominationComponent;
  let fixture: ComponentFixture<PaymentDenominationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDenominationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDenominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
