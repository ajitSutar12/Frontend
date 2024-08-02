import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingPowerRegisterComponent } from './drawing-power-register.component';

describe('DrawingPowerRegisterComponent', () => {
  let component: DrawingPowerRegisterComponent;
  let fixture: ComponentFixture<DrawingPowerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingPowerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingPowerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
