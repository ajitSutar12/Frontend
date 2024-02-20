import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstwiseLoanoverdueListComponent } from './instwise-loanoverdue-list.component';

describe('InstwiseLoanoverdueListComponent', () => {
  let component: InstwiseLoanoverdueListComponent;
  let fixture: ComponentFixture<InstwiseLoanoverdueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstwiseLoanoverdueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstwiseLoanoverdueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
