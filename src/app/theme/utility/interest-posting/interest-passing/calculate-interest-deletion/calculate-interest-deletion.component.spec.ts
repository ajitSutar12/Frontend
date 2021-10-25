import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateInterestDeletionComponent } from './calculate-interest-deletion.component';

describe('CalculateInterestDeletionComponent', () => {
  let component: CalculateInterestDeletionComponent;
  let fixture: ComponentFixture<CalculateInterestDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateInterestDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateInterestDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
