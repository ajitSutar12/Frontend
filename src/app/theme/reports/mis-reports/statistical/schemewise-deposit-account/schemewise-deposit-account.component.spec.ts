import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemewiseDepositAccountComponent } from './schemewise-deposit-account.component';

describe('SchemewiseDepositAccountComponent', () => {
  let component: SchemewiseDepositAccountComponent;
  let fixture: ComponentFixture<SchemewiseDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemewiseDepositAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemewiseDepositAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
