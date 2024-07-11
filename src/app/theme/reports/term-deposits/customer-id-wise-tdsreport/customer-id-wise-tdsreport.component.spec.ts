import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIdWiseTDSreportComponent } from './customer-id-wise-tdsreport.component';

describe('CustomerIdWiseTDSreportComponent', () => {
  let component: CustomerIdWiseTDSreportComponent;
  let fixture: ComponentFixture<CustomerIdWiseTDSreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerIdWiseTDSreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIdWiseTDSreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
