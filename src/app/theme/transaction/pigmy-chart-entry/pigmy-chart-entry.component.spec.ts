import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyChartEntryComponent } from './pigmy-chart-entry.component';

describe('PigmyChartEntryComponent', () => {
  let component: PigmyChartEntryComponent;
  let fixture: ComponentFixture<PigmyChartEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyChartEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyChartEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
