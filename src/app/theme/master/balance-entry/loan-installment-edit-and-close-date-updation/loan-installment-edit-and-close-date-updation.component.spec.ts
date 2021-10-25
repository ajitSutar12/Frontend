import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInstallmentEditAndCloseDateUpdationComponent } from './loan-installment-edit-and-close-date-updation.component';

describe('LoanInstallmentEditAndCloseDateUpdationComponent', () => {
  let component: LoanInstallmentEditAndCloseDateUpdationComponent;
  let fixture: ComponentFixture<LoanInstallmentEditAndCloseDateUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInstallmentEditAndCloseDateUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInstallmentEditAndCloseDateUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
