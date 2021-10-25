import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovalMultivoucherComponent } from './unapproval-multivoucher.component';

describe('UnapprovalMultivoucherComponent', () => {
  let component: UnapprovalMultivoucherComponent;
  let fixture: ComponentFixture<UnapprovalMultivoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovalMultivoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovalMultivoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
