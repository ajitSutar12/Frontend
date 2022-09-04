import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPigmyCollectionChartComponent } from './bnk-pigmy-collection-chart.component';

describe('BnkPigmyCollectionChartComponent', () => {
  let component: BnkPigmyCollectionChartComponent;
  let fixture: ComponentFixture<BnkPigmyCollectionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPigmyCollectionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPigmyCollectionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
