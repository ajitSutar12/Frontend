import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPeriodwiseAmountWiseListComponent } from './loan-periodwise-amount-wise-list.component';

describe('LoanPeriodwiseAmountWiseListComponent', () => {
  let component: LoanPeriodwiseAmountWiseListComponent;
  let fixture: ComponentFixture<LoanPeriodwiseAmountWiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPeriodwiseAmountWiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPeriodwiseAmountWiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
