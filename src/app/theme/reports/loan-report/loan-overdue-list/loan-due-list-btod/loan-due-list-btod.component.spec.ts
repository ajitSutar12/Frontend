import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDueListBtodComponent } from './loan-due-list-btod.component';

describe('LoanDueListBtodComponent', () => {
  let component: LoanDueListBtodComponent;
  let fixture: ComponentFixture<LoanDueListBtodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDueListBtodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDueListBtodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
