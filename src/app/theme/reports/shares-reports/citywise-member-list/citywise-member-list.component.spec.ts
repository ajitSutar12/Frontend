import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitywiseMemberListComponent } from './citywise-member-list.component';

describe('CitywiseMemberListComponent', () => {
  let component: CitywiseMemberListComponent;
  let fixture: ComponentFixture<CitywiseMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitywiseMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitywiseMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
