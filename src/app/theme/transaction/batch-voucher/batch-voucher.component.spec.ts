import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchVoucherComponent } from './batch-voucher.component';

describe('BatchVoucherComponent', () => {
  let component: BatchVoucherComponent;
  let fixture: ComponentFixture<BatchVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
