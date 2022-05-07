import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkLNamtStatementComponent } from './bnk-lnamt-statement.component';

describe('BnkLNamtStatementComponent', () => {
  let component: BnkLNamtStatementComponent;
  let fixture: ComponentFixture<BnkLNamtStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkLNamtStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkLNamtStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
