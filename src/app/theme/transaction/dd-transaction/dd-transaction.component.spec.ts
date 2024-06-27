import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdTransactionComponent } from './dd-transaction.component';

describe('DdTransactionComponent', () => {
  let component: DdTransactionComponent;
  let fixture: ComponentFixture<DdTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
