import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositsMasterComponent } from './term-deposits-master.component';

describe('TermDepositsMasterComponent', () => {
  let component: TermDepositsMasterComponent;
  let fixture: ComponentFixture<TermDepositsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
