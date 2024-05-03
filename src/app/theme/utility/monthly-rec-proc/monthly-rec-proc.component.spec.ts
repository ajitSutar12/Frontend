import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecProcComponent } from './monthly-rec-proc.component';

describe('MonthlyRecProcComponent', () => {
  let component: MonthlyRecProcComponent;
  let fixture: ComponentFixture<MonthlyRecProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
