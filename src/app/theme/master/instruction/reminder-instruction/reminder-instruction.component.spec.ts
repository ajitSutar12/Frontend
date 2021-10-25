import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderInstructionComponent } from './reminder-instruction.component';

describe('ReminderInstructionComponent', () => {
  let component: ReminderInstructionComponent;
  let fixture: ComponentFixture<ReminderInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
