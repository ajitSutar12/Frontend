import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkInstructionsInterestDebitComponent } from './bnk-instructions-interest-debit.component';

describe('BnkInstructionsInterestDebitComponent', () => {
  let component: BnkInstructionsInterestDebitComponent;
  let fixture: ComponentFixture<BnkInstructionsInterestDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkInstructionsInterestDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkInstructionsInterestDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
