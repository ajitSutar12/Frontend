import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcessCashBalanceComponent } from './excess-cash-balance.component';

describe('ExcessCashBalanceComponent', () => {
  let component: ExcessCashBalanceComponent;
  let fixture: ComponentFixture<ExcessCashBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcessCashBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcessCashBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
