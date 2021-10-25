import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDTransactionComponent } from './d-dtransaction.component';

describe('DDTransactionComponent', () => {
  let component: DDTransactionComponent;
  let fixture: ComponentFixture<DDTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
