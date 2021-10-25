import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningSharesTransactionsEntryComponent } from './opening-shares-transactions-entry.component';

describe('OpeningSharesTransactionsEntryComponent', () => {
  let component: OpeningSharesTransactionsEntryComponent;
  let fixture: ComponentFixture<OpeningSharesTransactionsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningSharesTransactionsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningSharesTransactionsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
