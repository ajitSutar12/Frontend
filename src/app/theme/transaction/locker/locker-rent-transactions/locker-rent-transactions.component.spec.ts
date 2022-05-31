import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerRentTransactionsComponent } from './locker-rent-transactions.component';

describe('LockerRentTransactionsComponent', () => {
  let component: LockerRentTransactionsComponent;
  let fixture: ComponentFixture<LockerRentTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRentTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerRentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
