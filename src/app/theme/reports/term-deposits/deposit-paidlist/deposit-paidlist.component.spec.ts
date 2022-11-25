import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositPaidlistComponent } from './deposit-paidlist.component';

describe('DepositPaidlistComponent', () => {
  let component: DepositPaidlistComponent;
  let fixture: ComponentFixture<DepositPaidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositPaidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositPaidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
