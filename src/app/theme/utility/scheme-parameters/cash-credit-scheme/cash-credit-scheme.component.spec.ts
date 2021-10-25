import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashCreditSchemeComponent } from './cash-credit-scheme.component';

describe('CashCreditSchemeComponent', () => {
  let component: CashCreditSchemeComponent;
  let fixture: ComponentFixture<CashCreditSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashCreditSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashCreditSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
