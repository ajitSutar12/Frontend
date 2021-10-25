import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPaidHistoryComponent } from './interest-paid-history.component';

describe('InterestPaidHistoryComponent', () => {
  let component: InterestPaidHistoryComponent;
  let fixture: ComponentFixture<InterestPaidHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPaidHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPaidHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
