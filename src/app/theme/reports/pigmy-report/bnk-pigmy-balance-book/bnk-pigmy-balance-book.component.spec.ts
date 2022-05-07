import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPigmyBalanceBookComponent } from './bnk-pigmy-balance-book.component';

describe('BnkPigmyBalanceBookComponent', () => {
  let component: BnkPigmyBalanceBookComponent;
  let fixture: ComponentFixture<BnkPigmyBalanceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPigmyBalanceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPigmyBalanceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
