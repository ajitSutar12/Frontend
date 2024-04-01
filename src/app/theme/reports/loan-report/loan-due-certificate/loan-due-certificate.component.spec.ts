import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDueCertificateComponent } from './loan-due-certificate.component';

describe('LoanDueCertificateComponent', () => {
  let component: LoanDueCertificateComponent;
  let fixture: ComponentFixture<LoanDueCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDueCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDueCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
