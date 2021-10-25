import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDivisionMasterComponent } from './salary-division-master.component';

describe('SalaryDvisionMasterComponent', () => {
  let component: SalaryDivisionMasterComponent;
  let fixture: ComponentFixture<SalaryDivisionMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryDivisionMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryDivisionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
