import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduePercentageSummaryComponent } from './overdue-percentage-summary.component';

describe('OverduePercentageSummaryComponent', () => {
  let component: OverduePercentageSummaryComponent;
  let fixture: ComponentFixture<OverduePercentageSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduePercentageSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduePercentageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
