import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryFlagUpdationComponent } from './recovery-flag-updation.component';

describe('RecoveryFlagUpdationComponent', () => {
  let component: RecoveryFlagUpdationComponent;
  let fixture: ComponentFixture<RecoveryFlagUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryFlagUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryFlagUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
