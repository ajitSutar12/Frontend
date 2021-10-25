import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateForLACCComponent } from './interest-rate-for-lacc.component';

describe('InterestRateForLACCComponent', () => {
  let component: InterestRateForLACCComponent;
  let fixture: ComponentFixture<InterestRateForLACCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestRateForLACCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRateForLACCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
