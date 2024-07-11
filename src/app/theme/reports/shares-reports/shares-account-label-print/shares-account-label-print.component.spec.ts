import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountLabelPrintComponent } from './shares-account-label-print.component';

describe('SharesAccountLabelPrintComponent', () => {
  let component: SharesAccountLabelPrintComponent;
  let fixture: ComponentFixture<SharesAccountLabelPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesAccountLabelPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountLabelPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
