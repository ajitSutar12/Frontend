import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidationTransactionComponent } from './consolidation-transaction.component';

describe('ConsolidationTransactionComponent', () => {
  let component: ConsolidationTransactionComponent;
  let fixture: ComponentFixture<ConsolidationTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidationTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidationTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
