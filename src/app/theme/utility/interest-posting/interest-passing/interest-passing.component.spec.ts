import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPassingComponent } from './interest-passing.component';

describe('InterestPassingComponent', () => {
  let component: InterestPassingComponent;
  let fixture: ComponentFixture<InterestPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
