import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuebalSummaryComponent } from './duebal-summary.component';

describe('DuebalSummaryComponent', () => {
  let component: DuebalSummaryComponent;
  let fixture: ComponentFixture<DuebalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuebalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuebalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
