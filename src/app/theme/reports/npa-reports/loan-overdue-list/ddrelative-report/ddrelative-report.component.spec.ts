import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDRelativeReportComponent } from './ddrelative-report.component';

describe('DDRelativeReportComponent', () => {
  let component: DDRelativeReportComponent;
  let fixture: ComponentFixture<DDRelativeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDRelativeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDRelativeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
