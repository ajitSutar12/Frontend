import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegStandingInstructionComponent } from './bnk-reg-standing-instruction.component';

describe('BnkRegStandingInstructionComponent', () => {
  let component: BnkRegStandingInstructionComponent;
  let fixture: ComponentFixture<BnkRegStandingInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegStandingInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegStandingInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
