import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeBalanceBetTwoDaysComponent } from './deposite-balance-bet-two-days.component';

describe('DepositeBalanceBetTwoDaysComponent', () => {
  let component: DepositeBalanceBetTwoDaysComponent;
  let fixture: ComponentFixture<DepositeBalanceBetTwoDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositeBalanceBetTwoDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeBalanceBetTwoDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
