import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodwiseClassificationloanComponent } from './periodwise-classificationloan.component';

describe('PeriodwiseClassificationloanComponent', () => {
  let component: PeriodwiseClassificationloanComponent;
  let fixture: ComponentFixture<PeriodwiseClassificationloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodwiseClassificationloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodwiseClassificationloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
