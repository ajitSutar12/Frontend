import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensiveListComponent } from './expensive-list.component';

describe('ExpensiveListComponent', () => {
  let component: ExpensiveListComponent;
  let fixture: ComponentFixture<ExpensiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
