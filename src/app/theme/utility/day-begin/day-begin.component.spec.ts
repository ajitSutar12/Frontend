import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBeginComponent } from './day-begin.component';

describe('DayBeginComponent', () => {
  let component: DayBeginComponent;
  let fixture: ComponentFixture<DayBeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
