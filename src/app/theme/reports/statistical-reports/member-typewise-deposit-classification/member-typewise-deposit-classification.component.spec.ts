import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypewiseDepositClassificationComponent } from './member-typewise-deposit-classification.component';

describe('MemberTypewiseDepositClassificationComponent', () => {
  let component: MemberTypewiseDepositClassificationComponent;
  let fixture: ComponentFixture<MemberTypewiseDepositClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTypewiseDepositClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypewiseDepositClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
