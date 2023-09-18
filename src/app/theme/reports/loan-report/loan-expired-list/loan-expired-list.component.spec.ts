import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanExpiredListComponent } from './loan-expired-list.component';

describe('LoanExpiredListComponent', () => {
  let component: LoanExpiredListComponent;
  let fixture: ComponentFixture<LoanExpiredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanExpiredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanExpiredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
