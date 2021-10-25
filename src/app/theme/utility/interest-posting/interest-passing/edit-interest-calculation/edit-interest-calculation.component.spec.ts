import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterestCalculationComponent } from './edit-interest-calculation.component';

describe('EditInterestCalculationComponent', () => {
  let component: EditInterestCalculationComponent;
  let fixture: ComponentFixture<EditInterestCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInterestCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInterestCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
