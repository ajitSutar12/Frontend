import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustidwiseMaturedDepositListComponent } from './custidwise-matured-deposit-list.component';

describe('CustidwiseMaturedDepositListComponent', () => {
  let component: CustidwiseMaturedDepositListComponent;
  let fixture: ComponentFixture<CustidwiseMaturedDepositListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustidwiseMaturedDepositListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustidwiseMaturedDepositListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
