import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLockerComponent } from './master-locker.component';

describe('MasterLockerComponent', () => {
  let component: MasterLockerComponent;
  let fixture: ComponentFixture<MasterLockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
