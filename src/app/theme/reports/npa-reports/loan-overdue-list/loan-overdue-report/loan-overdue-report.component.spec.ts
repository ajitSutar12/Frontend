import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverdueReportComponent } from './loan-overdue-report.component';

describe('LoanOverdueReportComponent', () => {
  let component: LoanOverdueReportComponent;
  let fixture: ComponentFixture<LoanOverdueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOverdueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverdueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
