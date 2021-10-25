import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositSchemeComponent } from './term-deposit-scheme.component';

describe('TermDepositSchemeComponent', () => {
  let component: TermDepositSchemeComponent;
  let fixture: ComponentFixture<TermDepositSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
