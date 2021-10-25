import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearWiseUnpaidDividendEntryComponent } from './year-wise-unpaid-dividend-entry.component';

describe('YearWiseUnpaidDividendEntryComponent', () => {
  let component: YearWiseUnpaidDividendEntryComponent;
  let fixture: ComponentFixture<YearWiseUnpaidDividendEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearWiseUnpaidDividendEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearWiseUnpaidDividendEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
