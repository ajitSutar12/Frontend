import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation.component';

describe('InterestPostingFlagUpdationComponent', () => {
  let component: InterestPostingFlagUpdationComponent;
  let fixture: ComponentFixture<InterestPostingFlagUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPostingFlagUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPostingFlagUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
