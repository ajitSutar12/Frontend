import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationEntryComponent } from './reconciliation-entry.component';

describe('ReconciliationEntryComponent', () => {
  let component: ReconciliationEntryComponent;
  let fixture: ComponentFixture<ReconciliationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
