import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkExpectStandingInstCreditComponent } from './bnk-expect-standing-inst-credit.component';

describe('BnkExpectStandingInstCreditComponent', () => {
  let component: BnkExpectStandingInstCreditComponent;
  let fixture: ComponentFixture<BnkExpectStandingInstCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkExpectStandingInstCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkExpectStandingInstCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
