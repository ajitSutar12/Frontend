import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkSubSummaryComponent } from './bnk-sub-summary.component';

describe('BnkSubSummaryComponent', () => {
  let component: BnkSubSummaryComponent;
  let fixture: ComponentFixture<BnkSubSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkSubSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkSubSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
