import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidDividendEntryComponent } from './unpaid-dividend-entry.component';

describe('UnpaidDividendEntryComponent', () => {
  let component: UnpaidDividendEntryComponent;
  let fixture: ComponentFixture<UnpaidDividendEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpaidDividendEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidDividendEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
