import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCashCreditComponent } from './master-cash-credit.component';

describe('MasterCashCreditComponent', () => {
  let component: MasterCashCreditComponent;
  let fixture: ComponentFixture<MasterCashCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCashCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCashCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
