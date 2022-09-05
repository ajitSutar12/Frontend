import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenominationReportsComponent } from './denomination-reports.component';

describe('DenominationReportsComponent', () => {
  let component: DenominationReportsComponent;
  let fixture: ComponentFixture<DenominationReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenominationReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenominationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
