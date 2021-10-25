import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPassingComponent } from './transaction-passing.component';

describe('TransactionPassingComponent', () => {
  let component: TransactionPassingComponent;
  let fixture: ComponentFixture<TransactionPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
