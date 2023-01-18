import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerAcCloseRentComponent } from './locker-ac-close-rent.component';

describe('LockerAcCloseRentComponent', () => {
  let component: LockerAcCloseRentComponent;
  let fixture: ComponentFixture<LockerAcCloseRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerAcCloseRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerAcCloseRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
