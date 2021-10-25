import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositReceiptPrintComponent } from './deposit-receipt-print.component';

describe('DepositReceiptPrintComponent', () => {
  let component: DepositReceiptPrintComponent;
  let fixture: ComponentFixture<DepositReceiptPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositReceiptPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositReceiptPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
