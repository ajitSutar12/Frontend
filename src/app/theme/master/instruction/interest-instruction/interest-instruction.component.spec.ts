import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestInstructionComponent } from './interest-instruction.component';

describe('InterestInstructionComponent', () => {
  let component: InterestInstructionComponent;
  let fixture: ComponentFixture<InterestInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
