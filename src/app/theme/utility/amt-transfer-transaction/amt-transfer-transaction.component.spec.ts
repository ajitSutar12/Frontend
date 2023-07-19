import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmtTransferTransactionComponent } from './amt-transfer-transaction.component';

describe('AmtTransferTransactionComponent', () => {
  let component: AmtTransferTransactionComponent;
  let fixture: ComponentFixture<AmtTransferTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmtTransferTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmtTransferTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
