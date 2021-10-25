import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpenPassingComponent } from './account-open-passing.component';

describe('AccountOpenPassingComponent', () => {
  let component: AccountOpenPassingComponent;
  let fixture: ComponentFixture<AccountOpenPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOpenPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpenPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
