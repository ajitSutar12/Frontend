import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDSFormSubmissionComponent } from './tds-form-submission.component';

describe('TDSFormSubmissionComponent', () => {
  let component: TDSFormSubmissionComponent;
  let fixture: ComponentFixture<TDSFormSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDSFormSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDSFormSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
