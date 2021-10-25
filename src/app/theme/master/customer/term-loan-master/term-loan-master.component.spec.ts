import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermLoanMasterComponent } from './term-loan-master.component';

describe('TermLoanMasterComponent', () => {
  let component: TermLoanMasterComponent;
  let fixture: ComponentFixture<TermLoanMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermLoanMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermLoanMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
