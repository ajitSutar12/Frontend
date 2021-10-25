import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerRackMasterComponent } from './locker-rack-master.component';

describe('LockerRackMasterComponent', () => {
  let component: LockerRackMasterComponent;
  let fixture: ComponentFixture<LockerRackMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRackMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerRackMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
