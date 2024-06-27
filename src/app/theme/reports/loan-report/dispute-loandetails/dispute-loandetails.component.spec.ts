import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeLoandetailsComponent } from './dispute-loandetails.component';

describe('DisputeLoandetailsComponent', () => {
  let component: DisputeLoandetailsComponent;
  let fixture: ComponentFixture<DisputeLoandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeLoandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeLoandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
