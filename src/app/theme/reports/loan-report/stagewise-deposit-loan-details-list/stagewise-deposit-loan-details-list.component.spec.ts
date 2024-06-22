import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagewiseDepositLoanDetailsListComponent } from './stagewise-deposit-loan-details-list.component';

describe('StagewiseDepositLoanDetailsListComponent', () => {
  let component: StagewiseDepositLoanDetailsListComponent;
  let fixture: ComponentFixture<StagewiseDepositLoanDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagewiseDepositLoanDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagewiseDepositLoanDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
