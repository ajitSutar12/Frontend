import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPostingComponent } from './interest-posting.component';

describe('InterestPostingComponent', () => {
  let component: InterestPostingComponent;
  let fixture: ComponentFixture<InterestPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
