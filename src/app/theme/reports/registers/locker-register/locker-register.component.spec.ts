import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerRegisterComponent } from './locker-register.component';

describe('LockerRegisterComponent', () => {
  let component: LockerRegisterComponent;
  let fixture: ComponentFixture<LockerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
