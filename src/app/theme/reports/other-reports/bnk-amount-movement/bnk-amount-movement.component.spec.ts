import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkAmountMovementComponent } from './bnk-amount-movement.component';

describe('BnkAmountMovementComponent', () => {
  let component: BnkAmountMovementComponent;
  let fixture: ComponentFixture<BnkAmountMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkAmountMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkAmountMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
