import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollExportFileProcessComponent } from './payroll-export-file-process.component';

describe('PayrollExportFileProcessComponent', () => {
  let component: PayrollExportFileProcessComponent;
  let fixture: ComponentFixture<PayrollExportFileProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollExportFileProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollExportFileProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
