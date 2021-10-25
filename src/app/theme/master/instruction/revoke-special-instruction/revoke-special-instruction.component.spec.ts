import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeSpecialInstructionComponent } from './revoke-special-instruction.component';

describe('RevokeSpecialInstructionComponent', () => {
  let component: RevokeSpecialInstructionComponent;
  let fixture: ComponentFixture<RevokeSpecialInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeSpecialInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeSpecialInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
