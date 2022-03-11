import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadStockDepreciationComponent } from './dead-stock-depreciation.component';

describe('DeadStockDepreciationComponent', () => {
  let component: DeadStockDepreciationComponent;
  let fixture: ComponentFixture<DeadStockDepreciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadStockDepreciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadStockDepreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
