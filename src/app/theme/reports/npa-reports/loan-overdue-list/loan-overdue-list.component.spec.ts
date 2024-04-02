import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverdueListComponent } from './loan-overdue-list.component';

describe('LoanOverdueListComponent', () => {
  let component: LoanOverdueListComponent;
  let fixture: ComponentFixture<LoanOverdueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOverdueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverdueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
