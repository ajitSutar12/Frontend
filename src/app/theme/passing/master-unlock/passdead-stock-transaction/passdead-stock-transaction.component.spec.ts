import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdeadStockTransactionComponent } from './passdead-stock-transaction.component';

describe('PassdeadStockTransactionComponent', () => {
  let component: PassdeadStockTransactionComponent;
  let fixture: ComponentFixture<PassdeadStockTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassdeadStockTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassdeadStockTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
