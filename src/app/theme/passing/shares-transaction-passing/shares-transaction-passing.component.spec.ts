import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesTransactionPassingComponent } from './shares-transaction-passing.component';

describe('SharesTransactionPassingComponent', () => {
  let component: SharesTransactionPassingComponent;
  let fixture: ComponentFixture<SharesTransactionPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesTransactionPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesTransactionPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
