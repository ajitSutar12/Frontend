import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDepositSummeryChartDatewiseComponent } from './monthly-deposit-summery-chart-datewise.component';

describe('MonthlyDepositSummeryChartDatewiseComponent', () => {
  let component: MonthlyDepositSummeryChartDatewiseComponent;
  let fixture: ComponentFixture<MonthlyDepositSummeryChartDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDepositSummeryChartDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDepositSummeryChartDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
