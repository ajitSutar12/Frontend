import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecProcessComponent } from './monthly-rec-process.component';

describe('MonthlyRecProcessComponent', () => {
  let component: MonthlyRecProcessComponent;
  let fixture: ComponentFixture<MonthlyRecProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
