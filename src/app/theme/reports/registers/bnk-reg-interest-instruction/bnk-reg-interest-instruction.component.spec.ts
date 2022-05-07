import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegInterestInstructionComponent } from './bnk-reg-interest-instruction.component';

describe('BnkRegInterestInstructionComponent', () => {
  let component: BnkRegInterestInstructionComponent;
  let fixture: ComponentFixture<BnkRegInterestInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegInterestInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegInterestInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
