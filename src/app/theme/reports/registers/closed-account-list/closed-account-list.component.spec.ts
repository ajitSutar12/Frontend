import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedAccountListComponent } from './closed-account-list.component';

describe('ClosedAccountListComponent', () => {
  let component: ClosedAccountListComponent;
  let fixture: ComponentFixture<ClosedAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
