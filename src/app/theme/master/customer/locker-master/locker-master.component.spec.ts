import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerMasterComponent } from './lockermaster.component';

describe('CurrentAccountMasterComponent', () => {
  let component: LockerMasterComponent;
  let fixture: ComponentFixture<LockerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LockerMasterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
