import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBanksDepositSchemeComponent } from './other-banks-deposit-scheme.component';

describe('OtherBanksDepositSchemeComponent', () => {
  let component: OtherBanksDepositSchemeComponent;
  let fixture: ComponentFixture<OtherBanksDepositSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBanksDepositSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBanksDepositSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
