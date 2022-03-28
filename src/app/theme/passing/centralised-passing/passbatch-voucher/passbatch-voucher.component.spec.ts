import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbatchVoucherComponent } from './passbatch-voucher.component';

describe('PassbatchVoucherComponent', () => {
  let component: PassbatchVoucherComponent;
  let fixture: ComponentFixture<PassbatchVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbatchVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbatchVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
