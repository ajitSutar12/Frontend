import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingComponent } from './account-closing.component';

describe('AccountClosingComponent', () => {
  let component: AccountClosingComponent;
  let fixture: ComponentFixture<AccountClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
