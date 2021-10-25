import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWorkDayEndComponent } from './counter-work-day-end.component';

describe('CounterWorkDayEndComponent', () => {
  let component: CounterWorkDayEndComponent;
  let fixture: ComponentFixture<CounterWorkDayEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterWorkDayEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWorkDayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
