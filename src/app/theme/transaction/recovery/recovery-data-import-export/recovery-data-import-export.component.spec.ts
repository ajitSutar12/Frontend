import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryDataImportExportComponent } from './recovery-data-import-export.component';

describe('RecoveryDataImportExportComponent', () => {
  let component: RecoveryDataImportExportComponent;
  let fixture: ComponentFixture<RecoveryDataImportExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryDataImportExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDataImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
