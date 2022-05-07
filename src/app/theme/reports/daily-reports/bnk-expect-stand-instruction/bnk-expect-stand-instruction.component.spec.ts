import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkExpectStandInstructionComponent } from './bnk-expect-stand-instruction.component';

describe('BnkExpectStandInstructionComponent', () => {
  let component: BnkExpectStandInstructionComponent;
  let fixture: ComponentFixture<BnkExpectStandInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkExpectStandInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkExpectStandInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
