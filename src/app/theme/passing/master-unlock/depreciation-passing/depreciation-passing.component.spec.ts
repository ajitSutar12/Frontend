import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciationPassingComponent } from './depreciation-passing.component';

describe('DepreciationPassingComponent', () => {
  let component: DepreciationPassingComponent;
  let fixture: ComponentFixture<DepreciationPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepreciationPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepreciationPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
