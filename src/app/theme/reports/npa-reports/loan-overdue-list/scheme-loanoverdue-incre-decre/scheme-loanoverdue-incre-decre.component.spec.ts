import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeLoanoverdueIncreDecreComponent } from './scheme-loanoverdue-incre-decre.component';

describe('SchemeLoanoverdueIncreDecreComponent', () => {
  let component: SchemeLoanoverdueIncreDecreComponent;
  let fixture: ComponentFixture<SchemeLoanoverdueIncreDecreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeLoanoverdueIncreDecreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeLoanoverdueIncreDecreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
