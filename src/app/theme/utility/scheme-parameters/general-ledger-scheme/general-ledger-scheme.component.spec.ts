import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLedgerSchemeComponent } from './general-ledger-scheme.component';

describe('GeneralLedgerSchemeComponent', () => {
  let component: GeneralLedgerSchemeComponent;
  let fixture: ComponentFixture<GeneralLedgerSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLedgerSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLedgerSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
