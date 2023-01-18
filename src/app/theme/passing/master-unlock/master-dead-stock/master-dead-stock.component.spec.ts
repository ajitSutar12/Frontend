import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDeadStockComponent } from './master-dead-stock.component';

describe('MasterDeadStockComponent', () => {
  let component: MasterDeadStockComponent;
  let fixture: ComponentFixture<MasterDeadStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDeadStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDeadStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
