import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoverdueInterestReceivableAmountComponent } from './editoverdue-interest-receivable-amount.component';

describe('EditoverdueInterestReceivableAmountComponent', () => {
  let component: EditoverdueInterestReceivableAmountComponent;
  let fixture: ComponentFixture<EditoverdueInterestReceivableAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoverdueInterestReceivableAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoverdueInterestReceivableAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
