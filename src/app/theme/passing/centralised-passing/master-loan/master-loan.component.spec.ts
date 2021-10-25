import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLoanComponent } from './master-loan.component';

describe('MasterLoanComponent', () => {
  let component: MasterLoanComponent;
  let fixture: ComponentFixture<MasterLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
