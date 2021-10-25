import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryInstallmentComponent } from './recovery-installment.component';

describe('RecoveryInstallmentComponent', () => {
  let component: RecoveryInstallmentComponent;
  let fixture: ComponentFixture<RecoveryInstallmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryInstallmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
