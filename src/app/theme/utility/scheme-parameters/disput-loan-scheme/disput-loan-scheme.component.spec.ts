import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputLoanSchemeComponent } from './disput-loan-scheme.component';

describe('DisputLoanSchemeComponent', () => {
  let component: DisputLoanSchemeComponent;
  let fixture: ComponentFixture<DisputLoanSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputLoanSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputLoanSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
