import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovalDepositClosingComponent } from './unapproval-deposit-closing.component';

describe('UnapprovalDepositClosingComponent', () => {
  let component: UnapprovalDepositClosingComponent;
  let fixture: ComponentFixture<UnapprovalDepositClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovalDepositClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovalDepositClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
