import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyReportComponent } from './pigmy-report.component';

describe('PigmyReportComponent', () => {
  let component: PigmyReportComponent;
  let fixture: ComponentFixture<PigmyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
