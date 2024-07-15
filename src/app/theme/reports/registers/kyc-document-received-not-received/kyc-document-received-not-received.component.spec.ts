import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCDocumentReceivedNotReceivedComponent } from './kyc-document-received-not-received.component';

describe('KYCDocumentReceivedNotReceivedComponent', () => {
  let component: KYCDocumentReceivedNotReceivedComponent;
  let fixture: ComponentFixture<KYCDocumentReceivedNotReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KYCDocumentReceivedNotReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCDocumentReceivedNotReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
