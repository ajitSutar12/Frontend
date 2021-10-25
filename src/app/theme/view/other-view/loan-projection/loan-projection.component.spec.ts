import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProjectionComponent } from './loan-projection.component';

describe('LoanProjectionComponent', () => {
  let component: LoanProjectionComponent;
  let fixture: ComponentFixture<LoanProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
