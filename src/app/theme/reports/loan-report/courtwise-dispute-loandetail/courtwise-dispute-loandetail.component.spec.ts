import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtwiseDisputeLoandetailComponent } from './courtwise-dispute-loandetail.component';

describe('CourtwiseDisputeLoandetailComponent', () => {
  let component: CourtwiseDisputeLoandetailComponent;
  let fixture: ComponentFixture<CourtwiseDisputeLoandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtwiseDisputeLoandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtwiseDisputeLoandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
