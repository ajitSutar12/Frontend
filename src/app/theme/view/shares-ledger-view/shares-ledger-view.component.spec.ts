import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesLedgerViewComponent } from './shares-ledger-view.component';

describe('SharesLedgerViewComponent', () => {
  let component: SharesLedgerViewComponent;
  let fixture: ComponentFixture<SharesLedgerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesLedgerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesLedgerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
