import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryModificationComponent } from './recovery-modification.component';

describe('RecoveryModificationComponent', () => {
  let component: RecoveryModificationComponent;
  let fixture: ComponentFixture<RecoveryModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
