import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositeAcRenewalComponent } from './term-deposite-ac-renewal.component';

describe('TermDepositeAcRenewalComponent', () => {
  let component: TermDepositeAcRenewalComponent;
  let fixture: ComponentFixture<TermDepositeAcRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositeAcRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositeAcRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
