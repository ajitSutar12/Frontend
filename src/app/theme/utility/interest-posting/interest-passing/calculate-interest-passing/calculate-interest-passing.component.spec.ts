import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateInterestPassingComponent } from './calculate-interest-passing.component';

describe('CalculateInterestPassingComponent', () => {
  let component: CalculateInterestPassingComponent;
  let fixture: ComponentFixture<CalculateInterestPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateInterestPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateInterestPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
