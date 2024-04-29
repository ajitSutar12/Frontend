import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitywiseLoanoverdueComponent } from './citywise-loanoverdue.component';

describe('CitywiseLoanoverdueComponent', () => {
  let component: CitywiseLoanoverdueComponent;
  let fixture: ComponentFixture<CitywiseLoanoverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitywiseLoanoverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitywiseLoanoverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
