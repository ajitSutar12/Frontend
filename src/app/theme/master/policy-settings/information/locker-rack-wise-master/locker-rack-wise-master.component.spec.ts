import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerRackWiseMasterComponent } from './locker-rack-wise-master.component';

describe('LockerRackWiseMasterComponent', () => {
  let component: LockerRackWiseMasterComponent;
  let fixture: ComponentFixture<LockerRackWiseMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRackWiseMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerRackWiseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
