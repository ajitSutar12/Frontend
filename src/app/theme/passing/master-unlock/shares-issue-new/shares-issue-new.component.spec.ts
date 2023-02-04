import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesIssueNewComponent } from './shares-issue-new.component';

describe('SharesIssueNewComponent', () => {
  let component: SharesIssueNewComponent;
  let fixture: ComponentFixture<SharesIssueNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesIssueNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesIssueNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
