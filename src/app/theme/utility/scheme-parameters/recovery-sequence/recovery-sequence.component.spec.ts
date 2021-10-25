import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverySequenceComponent } from './recovery-sequence.component';

describe('RecoverySequenceComponent', () => {
  let component: RecoverySequenceComponent;
  let fixture: ComponentFixture<RecoverySequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverySequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverySequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
