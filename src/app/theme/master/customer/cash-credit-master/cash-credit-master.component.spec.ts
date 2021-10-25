import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashCreditMasterComponent } from './cash-credit-master.component';

describe('CashCreditMasterComponent', () => {
  let component: CashCreditMasterComponent;
  let fixture: ComponentFixture<CashCreditMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashCreditMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashCreditMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
