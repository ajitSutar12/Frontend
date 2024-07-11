import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSecuritySumarryReportComponent } from './all-security-sumarry-report.component';

describe('AllSecuritySumarryReportComponent', () => {
  let component: AllSecuritySumarryReportComponent;
  let fixture: ComponentFixture<AllSecuritySumarryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSecuritySumarryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSecuritySumarryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
