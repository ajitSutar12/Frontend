import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleadgeStockComponent } from './pleadge-stock.component';

describe('PleadgeStockComponent', () => {
  let component: PleadgeStockComponent;
  let fixture: ComponentFixture<PleadgeStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleadgeStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleadgeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
