import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecoveryPrintComponent } from './monthly-recovery-print.component';

describe('MonthlyRecoveryPrintComponent', () => {
  let component: MonthlyRecoveryPrintComponent;
  let fixture: ComponentFixture<MonthlyRecoveryPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecoveryPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecoveryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
