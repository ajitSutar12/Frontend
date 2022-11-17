import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerCloseTransactionComponent } from './locker-close-transaction.component';

describe('LockerCloseTransactionComponent', () => {
  let component: LockerCloseTransactionComponent;
  let fixture: ComponentFixture<LockerCloseTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerCloseTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerCloseTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
