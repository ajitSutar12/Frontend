import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPAProcessComponent } from './npaprocess.component';

describe('NPAProcessComponent', () => {
  let component: NPAProcessComponent;
  let fixture: ComponentFixture<NPAProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPAProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NPAProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
