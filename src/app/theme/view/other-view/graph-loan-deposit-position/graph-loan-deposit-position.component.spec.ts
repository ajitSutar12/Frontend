import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLoanDepositPositionComponent } from './graph-loan-deposit-position.component';

describe('GraphLoanDepositPositionComponent', () => {
  let component: GraphLoanDepositPositionComponent;
  let fixture: ComponentFixture<GraphLoanDepositPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphLoanDepositPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLoanDepositPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
