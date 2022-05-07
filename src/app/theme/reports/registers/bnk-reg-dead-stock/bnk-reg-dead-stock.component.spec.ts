import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegDeadStockComponent } from './bnk-reg-dead-stock.component';

describe('BnkRegDeadStockComponent', () => {
  let component: BnkRegDeadStockComponent;
  let fixture: ComponentFixture<BnkRegDeadStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegDeadStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegDeadStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
