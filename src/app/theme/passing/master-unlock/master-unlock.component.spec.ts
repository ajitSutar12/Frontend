import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUnlockComponent } from './master-unlock.component';

describe('MasterUnlockComponent', () => {
  let component: MasterUnlockComponent;
  let fixture: ComponentFixture<MasterUnlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUnlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUnlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
