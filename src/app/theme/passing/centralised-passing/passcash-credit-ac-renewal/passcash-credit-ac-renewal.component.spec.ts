import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscashCreditAcRenewalComponent } from './passcash-credit-ac-renewal.component';

describe('PasscashCreditAcRenewalComponent', () => {
  let component: PasscashCreditAcRenewalComponent;
  let fixture: ComponentFixture<PasscashCreditAcRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasscashCreditAcRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscashCreditAcRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
