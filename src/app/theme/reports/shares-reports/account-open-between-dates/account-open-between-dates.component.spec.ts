import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpenBetweenDatesComponent } from './account-open-between-dates.component';

describe('AccountOpenBetweenDatesComponent', () => {
  let component: AccountOpenBetweenDatesComponent;
  let fixture: ComponentFixture<AccountOpenBetweenDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOpenBetweenDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpenBetweenDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
