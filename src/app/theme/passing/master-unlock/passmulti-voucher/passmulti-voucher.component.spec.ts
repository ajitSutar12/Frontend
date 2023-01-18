import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassmultiVoucherComponent } from './passmulti-voucher.component';

describe('PassmultiVoucherComponent', () => {
  let component: PassmultiVoucherComponent;
  let fixture: ComponentFixture<PassmultiVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassmultiVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassmultiVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
