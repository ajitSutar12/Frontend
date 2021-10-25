import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparitiveGraphLoanDepositPositionComponent } from './comparitive-graph-loan-deposit-position.component';

describe('ComparitiveGraphLoanDepositPositionComponent', () => {
  let component: ComparitiveGraphLoanDepositPositionComponent;
  let fixture: ComponentFixture<ComparitiveGraphLoanDepositPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparitiveGraphLoanDepositPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparitiveGraphLoanDepositPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
