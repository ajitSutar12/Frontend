import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingBranchMasterComponent } from './clearing-branch-master.component';

describe('ClearingBranchMasterComponent', () => {
  let component: ClearingBranchMasterComponent;
  let fixture: ComponentFixture<ClearingBranchMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearingBranchMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingBranchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
