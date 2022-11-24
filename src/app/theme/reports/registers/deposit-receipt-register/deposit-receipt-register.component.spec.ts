import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositReceiptRegisterComponent } from './deposit-receipt-register.component';

describe('DepositReceiptRegisterComponent', () => {
  let component: DepositReceiptRegisterComponent;
  let fixture: ComponentFixture<DepositReceiptRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositReceiptRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositReceiptRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
