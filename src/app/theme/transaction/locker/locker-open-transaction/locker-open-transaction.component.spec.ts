import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerOpenTransactionComponent } from './locker-open-transaction.component';

describe('LockerOpenTransactionComponent', () => {
  let component: LockerOpenTransactionComponent;
  let fixture: ComponentFixture<LockerOpenTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerOpenTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerOpenTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
