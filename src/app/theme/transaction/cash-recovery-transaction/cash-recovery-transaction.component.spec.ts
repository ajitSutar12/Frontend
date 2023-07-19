import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRecoveryTransactionComponent } from './cash-recovery-transaction.component';

describe('CashRecoveryTransactionComponent', () => {
  let component: CashRecoveryTransactionComponent;
  let fixture: ComponentFixture<CashRecoveryTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRecoveryTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRecoveryTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
