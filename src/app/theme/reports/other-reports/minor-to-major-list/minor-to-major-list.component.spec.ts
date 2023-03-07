import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorToMajorListComponent } from './minor-to-major-list.component';

describe('MinorToMajorListComponent', () => {
  let component: MinorToMajorListComponent;
  let fixture: ComponentFixture<MinorToMajorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorToMajorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorToMajorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
