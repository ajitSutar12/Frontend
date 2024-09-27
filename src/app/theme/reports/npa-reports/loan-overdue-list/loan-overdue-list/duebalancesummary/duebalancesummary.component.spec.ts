import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuebalancesummaryComponent } from './duebalancesummary.component';

describe('DuebalancesummaryComponent', () => {
  let component: DuebalancesummaryComponent;
  let fixture: ComponentFixture<DuebalancesummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuebalancesummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuebalancesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
