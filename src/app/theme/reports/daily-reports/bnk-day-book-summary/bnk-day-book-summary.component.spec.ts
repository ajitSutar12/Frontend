import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDayBookSummaryComponent } from './bnk-day-book-summary.component';

describe('BnkDayBookSummaryComponent', () => {
  let component: BnkDayBookSummaryComponent;
  let fixture: ComponentFixture<BnkDayBookSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDayBookSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDayBookSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
