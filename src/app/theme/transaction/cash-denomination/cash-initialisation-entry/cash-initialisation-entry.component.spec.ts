import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInitialisationEntryComponent } from './cash-initialisation-entry.component';

describe('CashInitialisationEntryComponent', () => {
  let component: CashInitialisationEntryComponent;
  let fixture: ComponentFixture<CashInitialisationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInitialisationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInitialisationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
