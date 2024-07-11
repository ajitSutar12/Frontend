import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueAmtPeriodLoanClassficationComponent } from './overdue-amt-period-loan-classfication.component';

describe('OverdueAmtPeriodLoanClassficationComponent', () => {
  let component: OverdueAmtPeriodLoanClassficationComponent;
  let fixture: ComponentFixture<OverdueAmtPeriodLoanClassficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueAmtPeriodLoanClassficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueAmtPeriodLoanClassficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
