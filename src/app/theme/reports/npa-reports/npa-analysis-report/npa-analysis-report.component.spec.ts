import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaAnalysisReportComponent } from './npa-analysis-report.component';

describe('NpaAnalysisReportComponent', () => {
  let component: NpaAnalysisReportComponent;
  let fixture: ComponentFixture<NpaAnalysisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaAnalysisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaAnalysisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
