import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositReportsComponent } from './term-deposit-reports.component';

describe('TermDepositReportsComponent', () => {
  let component: TermDepositReportsComponent;
  let fixture: ComponentFixture<TermDepositReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
