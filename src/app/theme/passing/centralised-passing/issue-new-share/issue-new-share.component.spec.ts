import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueNewShareComponent } from './issue-new-share.component';

describe('IssueNewShareComponent', () => {
  let component: IssueNewShareComponent;
  let fixture: ComponentFixture<IssueNewShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueNewShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueNewShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
