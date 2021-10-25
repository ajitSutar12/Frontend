import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositPatSchemeComponent } from './term-deposit-pat-scheme.component';

describe('TermDepositPatSchemeComponent', () => {
  let component: TermDepositPatSchemeComponent;
  let fixture: ComponentFixture<TermDepositPatSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositPatSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositPatSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
