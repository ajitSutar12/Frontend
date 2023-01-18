import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositClosingVoucherComponent } from './deposit-closing-voucher.component';

describe('DepositClosingVoucherComponent', () => {
  let component: DepositClosingVoucherComponent;
  let fixture: ComponentFixture<DepositClosingVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositClosingVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositClosingVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
