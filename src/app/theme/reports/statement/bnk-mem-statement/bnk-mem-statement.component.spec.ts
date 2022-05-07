import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkMemStatementComponent } from './bnk-mem-statement.component';

describe('BnkMemStatementComponent', () => {
  let component: BnkMemStatementComponent;
  let fixture: ComponentFixture<BnkMemStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkMemStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkMemStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
