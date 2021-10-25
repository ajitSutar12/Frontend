import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerSizeMasterComponent } from './locker-size-master.component';

describe('LockerSizeMasterComponent', () => {
  let component: LockerSizeMasterComponent;
  let fixture: ComponentFixture<LockerSizeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerSizeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerSizeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
