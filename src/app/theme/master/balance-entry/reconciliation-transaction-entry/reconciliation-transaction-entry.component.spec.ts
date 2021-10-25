import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationTransactionEntryComponent } from './reconciliation-transaction-entry.component';

describe('ReconciliationTransactionEntryComponent', () => {
  let component: ReconciliationTransactionEntryComponent;
  let fixture: ComponentFixture<ReconciliationTransactionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationTransactionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationTransactionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
