import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdLessdraftReportComponent } from './lcd-lessdraft-report.component';

describe('LcdLessdraftReportComponent', () => {
  let component: LcdLessdraftReportComponent;
  let fixture: ComponentFixture<LcdLessdraftReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdLessdraftReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdLessdraftReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
