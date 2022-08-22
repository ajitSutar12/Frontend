import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFormDayBookComponent } from './t-form-day-book.component';

describe('TFormDayBookComponent', () => {
  let component: TFormDayBookComponent;
  let fixture: ComponentFixture<TFormDayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFormDayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFormDayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
