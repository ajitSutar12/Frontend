import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRatewiseClassificationOfLoanComponent } from './interest-ratewise-classification-of-loan.component';

describe('InterestRatewiseClassificationOfLoanComponent', () => {
  let component: InterestRatewiseClassificationOfLoanComponent;
  let fixture: ComponentFixture<InterestRatewiseClassificationOfLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestRatewiseClassificationOfLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRatewiseClassificationOfLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
