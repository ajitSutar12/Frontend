import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInformationDetailsComponent } from './loan-information-details.component';

describe('LoanInformationDetailsComponent', () => {
  let component: LoanInformationDetailsComponent;
  let fixture: ComponentFixture<LoanInformationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInformationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
