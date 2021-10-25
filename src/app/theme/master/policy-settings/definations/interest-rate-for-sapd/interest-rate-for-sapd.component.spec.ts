import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateForSAPDComponent } from './interest-rate-for-sapd.component';

describe('InterestRateForSAPDComponent', () => {
  let component: InterestRateForSAPDComponent;
  let fixture: ComponentFixture<InterestRateForSAPDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestRateForSAPDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRateForSAPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
