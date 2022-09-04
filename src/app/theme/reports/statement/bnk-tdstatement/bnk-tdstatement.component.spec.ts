import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkTDStatementComponent } from './bnk-tdstatement.component';

describe('BnkTDStatementComponent', () => {
  let component: BnkTDStatementComponent;
  let fixture: ComponentFixture<BnkTDStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkTDStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkTDStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
