import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateInterestUnpassingComponent } from './calculate-interest-unpassing.component';

describe('CalculateInterestUnpassingComponent', () => {
  let component: CalculateInterestUnpassingComponent;
  let fixture: ComponentFixture<CalculateInterestUnpassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateInterestUnpassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateInterestUnpassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
