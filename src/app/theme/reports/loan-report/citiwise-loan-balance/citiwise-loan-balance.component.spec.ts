import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiwiseLoanBalanceComponent } from './citiwise-loan-balance.component';

describe('CitiwiseLoanBalanceComponent', () => {
  let component: CitiwiseLoanBalanceComponent;
  let fixture: ComponentFixture<CitiwiseLoanBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiwiseLoanBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiwiseLoanBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
