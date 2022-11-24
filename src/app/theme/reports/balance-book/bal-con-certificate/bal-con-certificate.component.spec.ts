import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalConCertificateComponent } from './bal-con-certificate.component';

describe('BalConCertificateComponent', () => {
  let component: BalConCertificateComponent;
  let fixture: ComponentFixture<BalConCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalConCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalConCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
