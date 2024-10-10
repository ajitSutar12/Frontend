import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInDenominationComponent } from './cash-in-denomination.component';

describe('CashInDenominationComponent', () => {
  let component: CashInDenominationComponent;
  let fixture: ComponentFixture<CashInDenominationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInDenominationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInDenominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
