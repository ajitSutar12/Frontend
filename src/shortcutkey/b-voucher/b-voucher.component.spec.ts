import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BvoucherComponent } from './b-voucher.component';

describe('BatchVoucherComponent', () => {
  let component:BvoucherComponent;
  let fixture: ComponentFixture<BvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
