import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountWiseLawadLoanComponent } from './count-wise-lawad-loan.component';

describe('CountWiseLawadLoanComponent', () => {
  let component: CountWiseLawadLoanComponent;
  let fixture: ComponentFixture<CountWiseLawadLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountWiseLawadLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountWiseLawadLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
