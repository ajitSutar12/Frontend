import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierMaintanaceComponent } from './cashier-maintanace.component';

describe('CashierMaintanaceComponent', () => {
  let component: CashierMaintanaceComponent;
  let fixture: ComponentFixture<CashierMaintanaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierMaintanaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierMaintanaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
