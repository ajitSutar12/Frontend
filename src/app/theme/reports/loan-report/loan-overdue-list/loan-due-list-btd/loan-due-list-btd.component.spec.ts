import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDueListBtdComponent } from './loan-due-list-btd.component';

describe('LoanDueListBtdComponent', () => {
  let component: LoanDueListBtdComponent;
  let fixture: ComponentFixture<LoanDueListBtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDueListBtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDueListBtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
