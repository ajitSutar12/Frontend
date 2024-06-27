import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCCACOpenSanctionDatewiseComponent } from './loan-cc-ac-open-sanction-datewise.component';

describe('LoanCCACOpenSanctionDatewiseComponent', () => {
  let component: LoanCCACOpenSanctionDatewiseComponent;
  let fixture: ComponentFixture<LoanCCACOpenSanctionDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCCACOpenSanctionDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCCACOpenSanctionDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
