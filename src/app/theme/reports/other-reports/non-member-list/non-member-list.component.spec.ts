import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMemberListComponent } from './non-member-list.component';

describe('NonMemberListComponent', () => {
  let component: NonMemberListComponent;
  let fixture: ComponentFixture<NonMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
