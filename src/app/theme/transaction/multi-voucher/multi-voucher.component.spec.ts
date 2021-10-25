import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiVoucherComponent } from './multi-voucher.component';

describe('MultiVoucherComponent', () => {
  let component: MultiVoucherComponent;
  let fixture: ComponentFixture<MultiVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
