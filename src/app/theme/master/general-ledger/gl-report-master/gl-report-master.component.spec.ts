import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlReportMasterComponent } from './gl-report-master.component';

describe('GlReportMasterComponent', () => {
  let component: GlReportMasterComponent;
  let fixture: ComponentFixture<GlReportMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlReportMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlReportMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
