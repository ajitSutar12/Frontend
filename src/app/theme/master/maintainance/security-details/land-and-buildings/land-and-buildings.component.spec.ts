import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAndBuildingsComponent } from './land-and-buildings.component';

describe('LandAndBuildingsComponent', () => {
  let component: LandAndBuildingsComponent;
  let fixture: ComponentFixture<LandAndBuildingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandAndBuildingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAndBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
