import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPAMarkingComponent } from './npamarking.component';

describe('NPAMarkingComponent', () => {
  let component: NPAMarkingComponent;
  let fixture: ComponentFixture<NPAMarkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPAMarkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NPAMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
