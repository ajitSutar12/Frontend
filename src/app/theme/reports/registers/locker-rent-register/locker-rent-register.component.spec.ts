import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerRentRegisterComponent } from './locker-rent-register.component';

describe('LockerRentRegisterComponent', () => {
  let component: LockerRentRegisterComponent;
  let fixture: ComponentFixture<LockerRentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerRentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
