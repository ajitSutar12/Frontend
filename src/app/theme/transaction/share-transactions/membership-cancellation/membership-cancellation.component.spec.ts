import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCancellationComponent } from './membership-cancellation.component';

describe('MembershipCancellationComponent', () => {
  let component: MembershipCancellationComponent;
  let fixture: ComponentFixture<MembershipCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
