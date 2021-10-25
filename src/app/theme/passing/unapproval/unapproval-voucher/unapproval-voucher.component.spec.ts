import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovalVoucherComponent } from './unapproval-voucher.component';

describe('UnapprovalVoucherComponent', () => {
  let component: UnapprovalVoucherComponent;
  let fixture: ComponentFixture<UnapprovalVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovalVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
