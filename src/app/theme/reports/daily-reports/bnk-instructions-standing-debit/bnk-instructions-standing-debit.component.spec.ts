import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkInstructionsStandingDebitComponent } from './bnk-instructions-standing-debit.component';

describe('BnkInstructionsStandingDebitComponent', () => {
  let component: BnkInstructionsStandingDebitComponent;
  let fixture: ComponentFixture<BnkInstructionsStandingDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkInstructionsStandingDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkInstructionsStandingDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
