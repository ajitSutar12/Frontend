import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSizeWiseBalanceComponent } from './loan-size-wise-balance.component';

describe('LoanSizeWiseBalanceComponent', () => {
  let component: LoanSizeWiseBalanceComponent;
  let fixture: ComponentFixture<LoanSizeWiseBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSizeWiseBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSizeWiseBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
