import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDatedDOComponent } from './back-dated-do.component';

describe('BackDatedDOComponent', () => {
  let component: BackDatedDOComponent;
  let fixture: ComponentFixture<BackDatedDOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackDatedDOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackDatedDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
