import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchAndSalaryDCComponent } from './branch-and-salary-dc.component';

describe('BranchAndSalaryDCComponent', () => {
  let component: BranchAndSalaryDCComponent;
  let fixture: ComponentFixture<BranchAndSalaryDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchAndSalaryDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchAndSalaryDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
