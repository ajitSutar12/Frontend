import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvoucherComponent } from './m-voucher.component';

describe('MvoucherComponent', () => {
  let component: MvoucherComponent;
  let fixture: ComponentFixture<MvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
