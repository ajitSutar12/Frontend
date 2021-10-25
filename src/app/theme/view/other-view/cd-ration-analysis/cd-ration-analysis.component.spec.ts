import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdRationAnalysisComponent } from './cd-ration-analysis.component';

describe('CdRationAnalysisComponent', () => {
  let component: CdRationAnalysisComponent;
  let fixture: ComponentFixture<CdRationAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdRationAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdRationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
