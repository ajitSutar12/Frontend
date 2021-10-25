import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceEntryComponent } from './balance-entry.component';

describe('BalanceEntryComponent', () => {
  let component: BalanceEntryComponent;
  let fixture: ComponentFixture<BalanceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
