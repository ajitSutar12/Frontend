import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerKeyRegisterComponent } from './locker-key-register.component';

describe('LockerKeyRegisterComponent', () => {
  let component: LockerKeyRegisterComponent;
  let fixture: ComponentFixture<LockerKeyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerKeyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerKeyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
