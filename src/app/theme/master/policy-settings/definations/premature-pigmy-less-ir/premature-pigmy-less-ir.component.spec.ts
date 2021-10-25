import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrematurePigmyLessIRComponent } from './premature-pigmy-less-ir.component';

describe('PrematurePigmyLessIRComponent', () => {
  let component: PrematurePigmyLessIRComponent;
  let fixture: ComponentFixture<PrematurePigmyLessIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrematurePigmyLessIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrematurePigmyLessIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
