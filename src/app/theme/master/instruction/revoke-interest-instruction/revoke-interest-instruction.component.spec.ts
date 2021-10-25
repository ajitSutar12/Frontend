import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeInterestInstructionComponent } from './revoke-interest-instruction.component';

describe('RevokeInterestInstructionComponent', () => {
  let component: RevokeInterestInstructionComponent;
  let fixture: ComponentFixture<RevokeInterestInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeInterestInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeInterestInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
