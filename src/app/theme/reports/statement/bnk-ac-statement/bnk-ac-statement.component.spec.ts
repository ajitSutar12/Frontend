import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkAcStatementComponent } from './bnk-ac-statement.component';

describe('BnkAcStatementComponent', () => {
  let component: BnkAcStatementComponent;
  let fixture: ComponentFixture<BnkAcStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkAcStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkAcStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
