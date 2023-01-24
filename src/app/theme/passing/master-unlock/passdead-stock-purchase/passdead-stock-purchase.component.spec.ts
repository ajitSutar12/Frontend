import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdeadStockPurchaseComponent } from './passdead-stock-purchase.component';

describe('PassdeadStockPurchaseComponent', () => {
  let component: PassdeadStockPurchaseComponent;
  let fixture: ComponentFixture<PassdeadStockPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassdeadStockPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassdeadStockPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
