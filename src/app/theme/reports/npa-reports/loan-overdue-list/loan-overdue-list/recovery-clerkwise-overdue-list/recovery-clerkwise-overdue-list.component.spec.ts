import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryClerkwiseOverdueListComponent } from './recovery-clerkwise-overdue-list.component';

describe('RecoveryClerkwiseOverdueListComponent', () => {
  let component: RecoveryClerkwiseOverdueListComponent;
  let fixture: ComponentFixture<RecoveryClerkwiseOverdueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryClerkwiseOverdueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryClerkwiseOverdueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
