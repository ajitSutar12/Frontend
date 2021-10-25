import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSanctionComponent } from './loan-sanction.component';

describe('LoanSanctionComponent', () => {
  let component: LoanSanctionComponent;
  let fixture: ComponentFixture<LoanSanctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSanctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
