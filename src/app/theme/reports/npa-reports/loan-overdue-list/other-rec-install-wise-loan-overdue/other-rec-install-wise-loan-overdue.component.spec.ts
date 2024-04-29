import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRecInstallWiseLoanOverdueComponent } from './other-rec-install-wise-loan-overdue.component';

describe('OtherRecInstallWiseLoanOverdueComponent', () => {
  let component: OtherRecInstallWiseLoanOverdueComponent;
  let fixture: ComponentFixture<OtherRecInstallWiseLoanOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherRecInstallWiseLoanOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRecInstallWiseLoanOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
