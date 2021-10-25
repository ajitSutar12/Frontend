import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadStockTransactionComponent } from './dead-stock-transaction.component';

describe('DeadStockTransactionComponent', () => {
  let component: DeadStockTransactionComponent;
  let fixture: ComponentFixture<DeadStockTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadStockTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadStockTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
