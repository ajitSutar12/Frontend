import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadStockMasterComponent } from './dead-stock-master.component';

describe('DeadStockMasterComponent', () => {
  let component: DeadStockMasterComponent;
  let fixture: ComponentFixture<DeadStockMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadStockMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadStockMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
