import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsInterestRateComponent } from './tds-interest-rate.component';

describe('TdsInterestRateComponent', () => {
  let component: TdsInterestRateComponent;
  let fixture: ComponentFixture<TdsInterestRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdsInterestRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdsInterestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
