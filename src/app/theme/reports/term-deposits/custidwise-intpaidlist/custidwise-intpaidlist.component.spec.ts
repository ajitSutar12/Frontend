import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustidwiseIntpaidlistComponent } from './custidwise-intpaidlist.component';

describe('CustidwiseIntpaidlistComponent', () => {
  let component: CustidwiseIntpaidlistComponent;
  let fixture: ComponentFixture<CustidwiseIntpaidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustidwiseIntpaidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustidwiseIntpaidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
