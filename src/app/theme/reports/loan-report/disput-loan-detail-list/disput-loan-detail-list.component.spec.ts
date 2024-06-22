import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputLoanDetailListComponent } from './disput-loan-detail-list.component';

describe('DisputLoanDetailListComponent', () => {
  let component: DisputLoanDetailListComponent;
  let fixture: ComponentFixture<DisputLoanDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputLoanDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputLoanDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
