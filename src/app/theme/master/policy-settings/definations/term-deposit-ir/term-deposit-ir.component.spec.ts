import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositIRComponent } from './term-deposit-ir.component';

describe('TermDepositIRComponent', () => {
  let component: TermDepositIRComponent;
  let fixture: ComponentFixture<TermDepositIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
