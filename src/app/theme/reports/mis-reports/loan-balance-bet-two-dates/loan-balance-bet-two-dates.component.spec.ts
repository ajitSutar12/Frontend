import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBalanceBetTwoDatesComponent } from './loan-balance-bet-two-dates.component';

describe('LoanBalanceBetTwoDatesComponent', () => {
  let component: LoanBalanceBetTwoDatesComponent;
  let fixture: ComponentFixture<LoanBalanceBetTwoDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanBalanceBetTwoDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBalanceBetTwoDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
