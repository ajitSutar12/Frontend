import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceBookComponent } from './balance-book.component';

describe('BalanceBookComponent', () => {
  let component: BalanceBookComponent;
  let fixture: ComponentFixture<BalanceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
