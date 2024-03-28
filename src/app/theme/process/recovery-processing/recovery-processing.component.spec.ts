import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryProcessingComponent } from './recovery-processing.component';

describe('RecoveryProcessingComponent', () => {
  let component: RecoveryProcessingComponent;
  let fixture: ComponentFixture<RecoveryProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
