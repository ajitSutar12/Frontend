import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdOverdraftReportComponent } from './lcd-overdraft-report.component';

describe('LcdOverdraftReportComponent', () => {
  let component: LcdOverdraftReportComponent;
  let fixture: ComponentFixture<LcdOverdraftReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdOverdraftReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdOverdraftReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
