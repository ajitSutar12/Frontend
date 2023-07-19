import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryReportsComponent } from './recovery-reports.component';

describe('RecoveryReportsComponent', () => {
  let component: RecoveryReportsComponent;
  let fixture: ComponentFixture<RecoveryReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
