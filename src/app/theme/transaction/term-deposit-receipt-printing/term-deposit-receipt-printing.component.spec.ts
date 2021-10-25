import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositReceiptPrintingComponent } from './term-deposit-receipt-printing.component';

describe('TermDepositReceiptPrintingComponent', () => {
  let component: TermDepositReceiptPrintingComponent;
  let fixture: ComponentFixture<TermDepositReceiptPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositReceiptPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositReceiptPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
