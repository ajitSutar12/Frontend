import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPigmyBlankChartComponent } from './bnk-pigmy-blank-chart.component';

describe('BnkPigmyBlankChartComponent', () => {
  let component: BnkPigmyBlankChartComponent;
  let fixture: ComponentFixture<BnkPigmyBlankChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPigmyBlankChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPigmyBlankChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
