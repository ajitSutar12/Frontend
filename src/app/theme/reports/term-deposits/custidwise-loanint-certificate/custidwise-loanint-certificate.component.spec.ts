import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustidwiseLoanintCertificateComponent } from './custidwise-loanint-certificate.component';

describe('CustidwiseLoanintCertificateComponent', () => {
  let component: CustidwiseLoanintCertificateComponent;
  let fixture: ComponentFixture<CustidwiseLoanintCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustidwiseLoanintCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustidwiseLoanintCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
