import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlReportLinkingComponent } from './gl-report-linking.component';

describe('GlReportLinkingComponent', () => {
  let component: GlReportLinkingComponent;
  let fixture: ComponentFixture<GlReportLinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlReportLinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlReportLinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
