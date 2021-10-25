import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSalaryDivisionMasterComponent } from './sub-salary-division-master.component';

describe('SubSalaryDivisionMasterComponent', () => {
  let component: SubSalaryDivisionMasterComponent;
  let fixture: ComponentFixture<SubSalaryDivisionMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSalaryDivisionMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSalaryDivisionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
