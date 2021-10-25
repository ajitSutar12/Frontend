import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantAndMachineryComponent } from './plant-and-machinery.component';

describe('PlantAndMachineryComponent', () => {
  let component: PlantAndMachineryComponent;
  let fixture: ComponentFixture<PlantAndMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantAndMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantAndMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
