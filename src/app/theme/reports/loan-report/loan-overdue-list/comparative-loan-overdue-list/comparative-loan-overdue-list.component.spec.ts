import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeLoanOverdueListComponent } from './comparative-loan-overdue-list.component';

describe('ComparativeLoanOverdueListComponent', () => {
  let component: ComparativeLoanOverdueListComponent;
  let fixture: ComponentFixture<ComparativeLoanOverdueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativeLoanOverdueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeLoanOverdueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
