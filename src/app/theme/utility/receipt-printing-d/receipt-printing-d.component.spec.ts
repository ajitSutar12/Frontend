import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPrintingDComponent } from './receipt-printing-d.component';

describe('ReceiptPrintingDComponent', () => {
  let component: ReceiptPrintingDComponent;
  let fixture: ComponentFixture<ReceiptPrintingDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptPrintingDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptPrintingDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
