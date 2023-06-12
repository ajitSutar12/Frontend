import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonNpaRecoveryComponent } from './non-npa-recovery.component';

describe('NonNpaRecoveryComponent', () => {
  let component: NonNpaRecoveryComponent;
  let fixture: ComponentFixture<NonNpaRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonNpaRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonNpaRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
