import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterestCalculationComponent } from './edit-interest-calculation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
describe('EditInterestCalculationComponent', () => {
  let component: EditInterestCalculationComponent;
  let fixture: ComponentFixture<EditInterestCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
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
