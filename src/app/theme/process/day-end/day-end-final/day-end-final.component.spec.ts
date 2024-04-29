import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayEndFinalComponent } from './day-end-final.component';

describe('DayEndFinalComponent', () => {
  let component: DayEndFinalComponent;
  let fixture: ComponentFixture<DayEndFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayEndFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayEndFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
