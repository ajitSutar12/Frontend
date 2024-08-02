import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoparativeDetailSummaryComponent } from './coparative-detail-summary.component';

describe('CoparativeDetailSummaryComponent', () => {
  let component: CoparativeDetailSummaryComponent;
  let fixture: ComponentFixture<CoparativeDetailSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoparativeDetailSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoparativeDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
