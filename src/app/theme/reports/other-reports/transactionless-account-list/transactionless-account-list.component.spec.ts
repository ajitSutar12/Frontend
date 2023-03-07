import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionlessAccountListComponent } from './transactionless-account-list.component';

describe('TransactionlessAccountListComponent', () => {
  let component: TransactionlessAccountListComponent;
  let fixture: ComponentFixture<TransactionlessAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionlessAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionlessAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
