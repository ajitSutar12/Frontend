import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRemitanceComponent } from './cash-remitance.component';

describe('CashRemitanceComponent', () => {
  let component: CashRemitanceComponent;
  let fixture: ComponentFixture<CashRemitanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRemitanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRemitanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
