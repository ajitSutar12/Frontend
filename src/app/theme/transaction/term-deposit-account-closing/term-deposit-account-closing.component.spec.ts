import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositAccountClosingComponent } from './term-deposit-account-closing.component';

describe('TermDepositAccountClosingComponent', () => {
  let component: TermDepositAccountClosingComponent;
  let fixture: ComponentFixture<TermDepositAccountClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositAccountClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositAccountClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
