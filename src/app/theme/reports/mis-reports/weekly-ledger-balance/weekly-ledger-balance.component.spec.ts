import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyLedgerBalanceComponent } from './weekly-ledger-balance.component';

describe('WeeklyLedgerBalanceComponent', () => {
  let component: WeeklyLedgerBalanceComponent;
  let fixture: ComponentFixture<WeeklyLedgerBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyLedgerBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyLedgerBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
