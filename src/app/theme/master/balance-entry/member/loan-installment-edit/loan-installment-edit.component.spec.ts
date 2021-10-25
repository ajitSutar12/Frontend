import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInstallmentEditComponent } from './loan-installment-edit.component';

describe('LoanInstallmentEditComponent', () => {
  let component: LoanInstallmentEditComponent;
  let fixture: ComponentFixture<LoanInstallmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInstallmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInstallmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
