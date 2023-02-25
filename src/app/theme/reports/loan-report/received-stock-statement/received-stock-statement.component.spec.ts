import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedStockStatementComponent } from './received-stock-statement.component';

describe('ReceivedStockStatementComponent', () => {
  let component: ReceivedStockStatementComponent;
  let fixture: ComponentFixture<ReceivedStockStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedStockStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedStockStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
