import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSilverStockComponent } from './gold-silver-stock.component';

describe('GoldSilverStockComponent', () => {
  let component: GoldSilverStockComponent;
  let fixture: ComponentFixture<GoldSilverStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldSilverStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSilverStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
