import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSilverReceiptPrintComponent } from './gold-silver-receipt-print.component';

describe('GoldSilverReceiptPrintComponent', () => {
  let component: GoldSilverReceiptPrintComponent;
  let fixture: ComponentFixture<GoldSilverReceiptPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldSilverReceiptPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSilverReceiptPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
