import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeStandingInstructionsComponent } from './revoke-standing-instructions.component';

describe('RevokeStandingInstructionsComponent', () => {
  let component: RevokeStandingInstructionsComponent;
  let fixture: ComponentFixture<RevokeStandingInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeStandingInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeStandingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
