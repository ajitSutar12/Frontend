import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustidwiseDepositListComponent } from './custidwise-deposit-list.component';

describe('CustidwiseDepositListComponent', () => {
  let component: CustidwiseDepositListComponent;
  let fixture: ComponentFixture<CustidwiseDepositListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustidwiseDepositListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustidwiseDepositListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
