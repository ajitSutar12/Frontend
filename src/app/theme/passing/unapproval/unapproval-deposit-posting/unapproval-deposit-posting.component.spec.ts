import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovalDepositPostingComponent } from './unapproval-deposit-posting.component';

describe('UnapprovalDepositPostingComponent', () => {
  let component: UnapprovalDepositPostingComponent;
  let fixture: ComponentFixture<UnapprovalDepositPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovalDepositPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovalDepositPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
