import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierUMComponent } from './cashier-um.component';

describe('CashierUMComponent', () => {
  let component: CashierUMComponent;
  let fixture: ComponentFixture<CashierUMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierUMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierUMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
