import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnBranchMasterComponent } from './own-branch-master.component';

describe('OwnBranchMasterComponent', () => {
  let component: OwnBranchMasterComponent;
  let fixture: ComponentFixture<OwnBranchMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnBranchMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnBranchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
