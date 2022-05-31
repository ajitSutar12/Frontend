import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerDepositAccountMasterComponent } from './locker-deposit-account-master.component';

describe('LockerDepositAccountMasterComponent', () => {
  let component: LockerDepositAccountMasterComponent;
  let fixture: ComponentFixture<LockerDepositAccountMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerDepositAccountMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerDepositAccountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
