import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueNewSharesPassingComponent } from './issue-new-shares-passing.component';

describe('IssueNewSharesPassingComponent', () => {
  let component: IssueNewSharesPassingComponent;
  let fixture: ComponentFixture<IssueNewSharesPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueNewSharesPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueNewSharesPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
