import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermLoanSchemeComponent } from './term-loan-scheme.component';

describe('TermLoanSchemeComponent', () => {
  let component: TermLoanSchemeComponent;
  let fixture: ComponentFixture<TermLoanSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermLoanSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermLoanSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
