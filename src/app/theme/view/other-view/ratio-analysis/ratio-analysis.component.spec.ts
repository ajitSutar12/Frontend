import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioAnalysisComponent } from './ratio-analysis.component';

describe('RatioAnalysisComponent', () => {
  let component: RatioAnalysisComponent;
  let fixture: ComponentFixture<RatioAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
