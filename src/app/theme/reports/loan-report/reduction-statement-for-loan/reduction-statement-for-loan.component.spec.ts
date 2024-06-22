import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReductionStatementForLoanComponent } from './reduction-statement-for-loan.component';

describe('ReductionStatementForLoanComponent', () => {
  let component: ReductionStatementForLoanComponent;
  let fixture: ComponentFixture<ReductionStatementForLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReductionStatementForLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReductionStatementForLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
