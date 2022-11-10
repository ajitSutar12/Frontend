import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiarySummaryComponent } from './subsidiary-summary.component';

describe('SubsidiarySummaryComponent', () => {
  let component: SubsidiarySummaryComponent;
  let fixture: ComponentFixture<SubsidiarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsidiarySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsidiarySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
