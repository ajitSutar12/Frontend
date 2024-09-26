import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryperiodwiseloanoverduelistComponent } from './summaryperiodwiseloanoverduelist.component';

describe('SummaryperiodwiseloanoverduelistComponent', () => {
  let component: SummaryperiodwiseloanoverduelistComponent;
  let fixture: ComponentFixture<SummaryperiodwiseloanoverduelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryperiodwiseloanoverduelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryperiodwiseloanoverduelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
