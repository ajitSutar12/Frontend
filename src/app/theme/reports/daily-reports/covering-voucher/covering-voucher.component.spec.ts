import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveringVoucherComponent } from './covering-voucher.component';

describe('CoveringVoucherComponent', () => {
  let component: CoveringVoucherComponent;
  let fixture: ComponentFixture<CoveringVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveringVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveringVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
