import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCDocumentComponent } from './kyc-document.component';

describe('KYCDocumentComponent', () => {
  let component: KYCDocumentComponent;
  let fixture: ComponentFixture<KYCDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KYCDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
