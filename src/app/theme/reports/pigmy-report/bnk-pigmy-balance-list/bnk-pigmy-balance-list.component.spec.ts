import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPigmyBalanceListComponent } from './bnk-pigmy-balance-list.component';

describe('BnkPigmyBalanceListComponent', () => {
  let component: BnkPigmyBalanceListComponent;
  let fixture: ComponentFixture<BnkPigmyBalanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPigmyBalanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPigmyBalanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
