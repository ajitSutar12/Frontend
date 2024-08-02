import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountwiseDepositIntrestCertiComponent } from './amountwise-deposit-intrest-certi.component';

describe('AmountwiseDepositIntrestCertiComponent', () => {
  let component: AmountwiseDepositIntrestCertiComponent;
  let fixture: ComponentFixture<AmountwiseDepositIntrestCertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountwiseDepositIntrestCertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountwiseDepositIntrestCertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
