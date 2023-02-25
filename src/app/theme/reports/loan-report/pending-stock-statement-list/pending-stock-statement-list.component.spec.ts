import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingStockStatementListComponent } from './pending-stock-statement-list.component';

describe('PendingStockStatementListComponent', () => {
  let component: PendingStockStatementListComponent;
  let fixture: ComponentFixture<PendingStockStatementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingStockStatementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingStockStatementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
