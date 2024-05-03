import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecPostingComponent } from './monthly-rec-posting.component';

describe('MonthlyRecPostingComponent', () => {
  let component: MonthlyRecPostingComponent;
  let fixture: ComponentFixture<MonthlyRecPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
