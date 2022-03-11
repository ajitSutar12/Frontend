import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPAProcessLockingComponent } from './npaprocess-locking.component';

describe('NPAProcessLockingComponent', () => {
  let component: NPAProcessLockingComponent;
  let fixture: ComponentFixture<NPAProcessLockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPAProcessLockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NPAProcessLockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
