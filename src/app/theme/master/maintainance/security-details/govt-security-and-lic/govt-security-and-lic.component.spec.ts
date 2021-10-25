import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtSecurityAndLicComponent } from './govt-security-and-lic.component';

describe('GovtSecurityAndLicComponent', () => {
  let component: GovtSecurityAndLicComponent;
  let fixture: ComponentFixture<GovtSecurityAndLicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtSecurityAndLicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtSecurityAndLicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
