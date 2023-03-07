import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcwiseLoanoverdueListComponent } from './acwise-loanoverdue-list.component';

describe('AcwiseLoanoverdueListComponent', () => {
  let component: AcwiseLoanoverdueListComponent;
  let fixture: ComponentFixture<AcwiseLoanoverdueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcwiseLoanoverdueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcwiseLoanoverdueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
