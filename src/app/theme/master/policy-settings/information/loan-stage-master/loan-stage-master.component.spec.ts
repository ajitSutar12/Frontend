import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStageMasterComponent } from './loan-stage-master.component';

describe('LoanStageMasterComponent', () => {
  let component: LoanStageMasterComponent;
  let fixture: ComponentFixture<LoanStageMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanStageMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanStageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
