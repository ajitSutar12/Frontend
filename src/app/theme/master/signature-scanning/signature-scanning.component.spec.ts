import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureScanningComponent } from './signature-scanning.component';

describe('SignatureScanningComponent', () => {
  let component: SignatureScanningComponent;
  let fixture: ComponentFixture<SignatureScanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureScanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureScanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
