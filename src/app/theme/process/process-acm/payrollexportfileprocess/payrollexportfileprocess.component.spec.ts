import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollexportfileprocessComponent } from './payrollexportfileprocess.component';

describe('PayrollexportfileprocessComponent', () => {
  let component: PayrollexportfileprocessComponent;
  let fixture: ComponentFixture<PayrollexportfileprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollexportfileprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollexportfileprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
