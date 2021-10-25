import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCancellationPassingComponent } from './membership-cancellation-passing.component';

describe('MembershipCancellationPassingComponent', () => {
  let component: MembershipCancellationPassingComponent;
  let fixture: ComponentFixture<MembershipCancellationPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipCancellationPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipCancellationPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
