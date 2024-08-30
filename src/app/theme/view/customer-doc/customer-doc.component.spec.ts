import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDocComponent } from './customer-doc.component';

describe('CustomerDocComponent', () => {
  let component: CustomerDocComponent;
  let fixture: ComponentFixture<CustomerDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
