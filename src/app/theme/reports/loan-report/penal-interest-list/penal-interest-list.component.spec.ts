import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalInterestListComponent } from './penal-interest-list.component';

describe('PenalInterestListComponent', () => {
  let component: PenalInterestListComponent;
  let fixture: ComponentFixture<PenalInterestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalInterestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalInterestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
