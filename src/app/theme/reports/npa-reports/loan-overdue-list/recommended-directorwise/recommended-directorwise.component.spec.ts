import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedDirectorwiseComponent } from './recommended-directorwise.component';

describe('RecommendedDirectorwiseComponent', () => {
  let component: RecommendedDirectorwiseComponent;
  let fixture: ComponentFixture<RecommendedDirectorwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedDirectorwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedDirectorwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
