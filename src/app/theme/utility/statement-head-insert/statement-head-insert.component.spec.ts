import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementHeadInsertComponent } from './statement-head-insert.component';

describe('StatementHeadInsertComponent', () => {
  let component: StatementHeadInsertComponent;
  let fixture: ComponentFixture<StatementHeadInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementHeadInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementHeadInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
