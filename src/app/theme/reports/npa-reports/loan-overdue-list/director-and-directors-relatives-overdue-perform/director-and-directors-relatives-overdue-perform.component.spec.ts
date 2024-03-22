import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorAndDirectorsRelativesOverduePerformComponent } from './director-and-directors-relatives-overdue-perform.component';

describe('DirectorAndDirectorsRelativesOverduePerformComponent', () => {
  let component: DirectorAndDirectorsRelativesOverduePerformComponent;
  let fixture: ComponentFixture<DirectorAndDirectorsRelativesOverduePerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorAndDirectorsRelativesOverduePerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorAndDirectorsRelativesOverduePerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
