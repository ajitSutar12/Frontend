import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduePercentSummaryComponent } from './overdue-percent-summary.component';

describe('OverduePercentSummaryComponent', () => {
  let component: OverduePercentSummaryComponent;
  let fixture: ComponentFixture<OverduePercentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduePercentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduePercentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
