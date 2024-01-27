import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadStockPComponent } from './dead-stock-p.component';

describe('DeadStockPComponent', () => {
  let component: DeadStockPComponent;
  let fixture: ComponentFixture<DeadStockPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadStockPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadStockPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
