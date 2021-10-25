import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosePassingComponent } from './account-close-passing.component';

describe('AccountClosePassingComponent', () => {
  let component: AccountClosePassingComponent;
  let fixture: ComponentFixture<AccountClosePassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosePassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosePassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
