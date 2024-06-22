import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageMonthlyPositionDebitCreditComponent } from './average-monthly-position-debit-credit.component';

describe('AverageMonthlyPositionDebitCreditComponent', () => {
  let component: AverageMonthlyPositionDebitCreditComponent;
  let fixture: ComponentFixture<AverageMonthlyPositionDebitCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageMonthlyPositionDebitCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageMonthlyPositionDebitCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
