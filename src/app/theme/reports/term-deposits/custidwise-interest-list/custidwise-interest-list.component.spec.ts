import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustidwiseInterestListComponent } from './custidwise-interest-list.component';

describe('CustidwiseInterestListComponent', () => {
  let component: CustidwiseInterestListComponent;
  let fixture: ComponentFixture<CustidwiseInterestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustidwiseInterestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustidwiseInterestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
