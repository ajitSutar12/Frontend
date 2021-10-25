import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceOSCDAComponent } from './balance-oscda.component';

describe('BalanceOSCDAComponent', () => {
  let component: BalanceOSCDAComponent;
  let fixture: ComponentFixture<BalanceOSCDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceOSCDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceOSCDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
