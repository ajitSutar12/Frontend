import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadStockPurchaseComponent } from './dead-stock-purchase.component';

describe('DeadStockPurchaseComponent', () => {
  let component: DeadStockPurchaseComponent;
  let fixture: ComponentFixture<DeadStockPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadStockPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadStockPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
