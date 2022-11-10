import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersPrintingComponent } from './vouchers-printing.component';

describe('VouchersPrintingComponent', () => {
  let component: VouchersPrintingComponent;
  let fixture: ComponentFixture<VouchersPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchersPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchersPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
