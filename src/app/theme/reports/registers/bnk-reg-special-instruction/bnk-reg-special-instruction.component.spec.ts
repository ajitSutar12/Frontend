import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegSpecialInstructionComponent } from './bnk-reg-special-instruction.component';

describe('BnkRegSpecialInstructionComponent', () => {
  let component: BnkRegSpecialInstructionComponent;
  let fixture: ComponentFixture<BnkRegSpecialInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegSpecialInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegSpecialInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
