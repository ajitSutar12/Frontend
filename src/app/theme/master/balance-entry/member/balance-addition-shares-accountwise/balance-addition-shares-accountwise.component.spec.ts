import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAdditionSharesAccountwiseComponent } from './balance-addition-shares-accountwise.component';

describe('BalanceAdditionSharesAccountwiseComponent', () => {
  let component: BalanceAdditionSharesAccountwiseComponent;
  let fixture: ComponentFixture<BalanceAdditionSharesAccountwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceAdditionSharesAccountwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAdditionSharesAccountwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
