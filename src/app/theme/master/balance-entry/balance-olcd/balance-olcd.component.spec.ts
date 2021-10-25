import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceOLCDComponent } from './balance-olcd.component';

describe('BalanceOLCDComponent', () => {
  let component: BalanceOLCDComponent;
  let fixture: ComponentFixture<BalanceOLCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceOLCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceOLCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
