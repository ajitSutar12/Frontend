import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkLedgerABTypeListComponent } from './bnk-ledger-abtype-list.component';

describe('BnkLedgerABTypeListComponent', () => {
  let component: BnkLedgerABTypeListComponent;
  let fixture: ComponentFixture<BnkLedgerABTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkLedgerABTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkLedgerABTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
