import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTransactionsComponent } from './share-transactions.component';

describe('ShareTransactionsComponent', () => {
  let component: ShareTransactionsComponent;
  let fixture: ComponentFixture<ShareTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
