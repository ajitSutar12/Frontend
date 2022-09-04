import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportsWithSearchingComponent } from './all-reports-with-searching.component';

describe('AllReportsWithSearchingComponent', () => {
  let component: AllReportsWithSearchingComponent;
  let fixture: ComponentFixture<AllReportsWithSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReportsWithSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportsWithSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
