import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEndBranchwiseComponent } from './year-end-branchwise.component';

describe('YearEndBranchwiseComponent', () => {
  let component: YearEndBranchwiseComponent;
  let fixture: ComponentFixture<YearEndBranchwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearEndBranchwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearEndBranchwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
