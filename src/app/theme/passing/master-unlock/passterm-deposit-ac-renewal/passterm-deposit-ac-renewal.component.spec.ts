import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasstermDepositAcRenewalComponent } from './passterm-deposit-ac-renewal.component';

describe('PasstermDepositAcRenewalComponent', () => {
  let component: PasstermDepositAcRenewalComponent;
  let fixture: ComponentFixture<PasstermDepositAcRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasstermDepositAcRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasstermDepositAcRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
