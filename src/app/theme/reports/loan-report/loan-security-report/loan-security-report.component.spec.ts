import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSecurityReportComponent } from './loan-security-report.component';

describe('LoanSecurityReportComponent', () => {
  let component: LoanSecurityReportComponent;
  let fixture: ComponentFixture<LoanSecurityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSecurityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSecurityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
