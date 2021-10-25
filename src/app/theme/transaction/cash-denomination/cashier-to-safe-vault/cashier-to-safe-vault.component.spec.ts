import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierToSafeVaultComponent } from './cashier-to-safe-vault.component';

describe('CashierToSafeVaultComponent', () => {
  let component: CashierToSafeVaultComponent;
  let fixture: ComponentFixture<CashierToSafeVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierToSafeVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierToSafeVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
