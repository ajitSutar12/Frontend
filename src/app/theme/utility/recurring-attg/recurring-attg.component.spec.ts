import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringAttgComponent } from './recurring-attg.component';

describe('RecurringAttgComponent', () => {
  let component: RecurringAttgComponent;
  let fixture: ComponentFixture<RecurringAttgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringAttgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringAttgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
