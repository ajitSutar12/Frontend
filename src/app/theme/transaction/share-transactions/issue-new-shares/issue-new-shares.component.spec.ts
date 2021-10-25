import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueNewSharesComponent } from './issue-new-shares.component';

describe('IssueNewSharesComponent', () => {
  let component: IssueNewSharesComponent;
  let fixture: ComponentFixture<IssueNewSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueNewSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueNewSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
