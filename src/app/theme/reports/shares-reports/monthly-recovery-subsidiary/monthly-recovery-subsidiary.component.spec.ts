import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecoverySubsidiaryComponent } from './monthly-recovery-subsidiary.component';

describe('MonthlyRecoverySubsidiaryComponent', () => {
  let component: MonthlyRecoverySubsidiaryComponent;
  let fixture: ComponentFixture<MonthlyRecoverySubsidiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecoverySubsidiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecoverySubsidiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
