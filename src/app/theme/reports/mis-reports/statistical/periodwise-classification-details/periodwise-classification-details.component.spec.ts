import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodwiseClassificationDetailsComponent } from './periodwise-classification-details.component';

describe('PeriodwiseClassificationDetailsComponent', () => {
  let component: PeriodwiseClassificationDetailsComponent;
  let fixture: ComponentFixture<PeriodwiseClassificationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodwiseClassificationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodwiseClassificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
