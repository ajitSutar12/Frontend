import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebitInterestTransactionComponent } from './rebit-interest-transaction.component';

describe('RebitInterestTransactionComponent', () => {
  let component: RebitInterestTransactionComponent;
  let fixture: ComponentFixture<RebitInterestTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebitInterestTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebitInterestTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
