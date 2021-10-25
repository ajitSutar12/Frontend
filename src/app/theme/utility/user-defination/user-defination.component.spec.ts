import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinationComponent } from './user-defination.component';

describe('UserDefinationComponent', () => {
  let component: UserDefinationComponent;
  let fixture: ComponentFixture<UserDefinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDefinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
