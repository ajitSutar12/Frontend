import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAndCCInterestRateChangesComponent } from './loan-and-ccinterest-rate-changes.component';

describe('LoanAndCCInterestRateChangesComponent', () => {
  let component: LoanAndCCInterestRateChangesComponent;
  let fixture: ComponentFixture<LoanAndCCInterestRateChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAndCCInterestRateChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAndCCInterestRateChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
