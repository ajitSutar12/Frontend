import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookIssueComponent } from './passbook-issue.component';

describe('PassbookIssueComponent', () => {
  let component: PassbookIssueComponent;
  let fixture: ComponentFixture<PassbookIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
