import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkExpectIntInstructCreditComponent } from './bnk-expect-int-instruct-credit.component';

describe('BnkExpectIntInstructCreditComponent', () => {
  let component: BnkExpectIntInstructCreditComponent;
  let fixture: ComponentFixture<BnkExpectIntInstructCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkExpectIntInstructCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkExpectIntInstructCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
