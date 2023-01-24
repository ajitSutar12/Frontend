import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLockerDepositComponent } from './master-locker-deposit.component';

describe('MasterLockerDepositComponent', () => {
  let component: MasterLockerDepositComponent;
  let fixture: ComponentFixture<MasterLockerDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLockerDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLockerDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
