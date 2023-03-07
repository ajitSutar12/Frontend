import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReceivableinstIntrestComponent } from './loan-receivableinst-intrest.component';

describe('LoanReceivableinstIntrestComponent', () => {
  let component: LoanReceivableinstIntrestComponent;
  let fixture: ComponentFixture<LoanReceivableinstIntrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanReceivableinstIntrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanReceivableinstIntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
