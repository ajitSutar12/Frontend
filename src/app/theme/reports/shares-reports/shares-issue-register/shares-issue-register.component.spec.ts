import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesIssueRegisterComponent } from './shares-issue-register.component';

describe('SharesIssueRegisterComponent', () => {
  let component: SharesIssueRegisterComponent;
  let fixture: ComponentFixture<SharesIssueRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesIssueRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesIssueRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
