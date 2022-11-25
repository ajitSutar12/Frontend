import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsecurityDetailReportComponent } from './allsecurity-detail-report.component';

describe('AllsecurityDetailReportComponent', () => {
  let component: AllsecurityDetailReportComponent;
  let fixture: ComponentFixture<AllsecurityDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsecurityDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsecurityDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
