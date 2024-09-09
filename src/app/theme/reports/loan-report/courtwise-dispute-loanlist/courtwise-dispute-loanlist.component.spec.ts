import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtwiseDisputeLoanlistComponent } from './courtwise-dispute-loanlist.component';

describe('CourtwiseDisputeLoanlistComponent', () => {
  let component: CourtwiseDisputeLoanlistComponent;
  let fixture: ComponentFixture<CourtwiseDisputeLoanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtwiseDisputeLoanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtwiseDisputeLoanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
