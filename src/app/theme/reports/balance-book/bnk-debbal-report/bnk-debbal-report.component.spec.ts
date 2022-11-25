import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDebbalReportComponent } from './bnk-debbal-report.component';

describe('BnkDebbalReportComponent', () => {
  let component: BnkDebbalReportComponent;
  let fixture: ComponentFixture<BnkDebbalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDebbalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDebbalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
