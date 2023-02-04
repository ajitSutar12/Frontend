import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentLockerComponent } from './rent-locker.component';

describe('RentLockerComponent', () => {
  let component: RentLockerComponent;
  let fixture: ComponentFixture<RentLockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentLockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
