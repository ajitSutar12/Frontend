import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCategoryMasterComponent } from './interest-category-master.component';

describe('InterestCategoryMasterComponent', () => {
  let component: InterestCategoryMasterComponent;
  let fixture: ComponentFixture<InterestCategoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCategoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCategoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
