import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSizeWiseBalanceComponent } from './deposit-size-wise-balance.component';

describe('DepositSizeWiseBalanceComponent', () => {
  let component: DepositSizeWiseBalanceComponent;
  let fixture: ComponentFixture<DepositSizeWiseBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositSizeWiseBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSizeWiseBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
