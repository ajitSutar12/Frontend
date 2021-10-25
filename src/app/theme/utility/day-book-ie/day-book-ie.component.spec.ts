import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBookIEComponent } from './day-book-ie.component';

describe('DayBookIEComponent', () => {
  let component: DayBookIEComponent;
  let fixture: ComponentFixture<DayBookIEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBookIEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBookIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
