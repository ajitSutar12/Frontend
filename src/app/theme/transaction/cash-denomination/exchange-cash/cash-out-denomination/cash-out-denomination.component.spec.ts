import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashOutDenominationComponent } from './cash-out-denomination.component';

describe('CashOutDenominationComponent', () => {
  let component: CashOutDenominationComponent;
  let fixture: ComponentFixture<CashOutDenominationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashOutDenominationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashOutDenominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
