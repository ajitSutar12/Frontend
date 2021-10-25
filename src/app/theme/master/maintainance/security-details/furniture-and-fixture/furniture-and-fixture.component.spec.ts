import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureAndFixtureComponent } from './furniture-and-fixture.component';

describe('FurnitureAndFixtureComponent', () => {
  let component: FurnitureAndFixtureComponent;
  let fixture: ComponentFixture<FurnitureAndFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureAndFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureAndFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
