import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTransferTransactionComponent } from './member-transfer-transaction.component';

describe('MemberTransferTransactionComponent', () => {
  let component: MemberTransferTransactionComponent;
  let fixture: ComponentFixture<MemberTransferTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTransferTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTransferTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
