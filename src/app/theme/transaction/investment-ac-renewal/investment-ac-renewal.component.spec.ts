import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAcRenewalComponent } from './investment-ac-renewal.component';

describe('InvestmentAcRenewalComponent', () => {
  let component: InvestmentAcRenewalComponent;
  let fixture: ComponentFixture<InvestmentAcRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentAcRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentAcRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
