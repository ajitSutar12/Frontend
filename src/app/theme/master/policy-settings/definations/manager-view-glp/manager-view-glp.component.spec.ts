import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewGLPComponent } from './manager-view-glp.component';

describe('ManagerViewGLPComponent', () => {
  let component: ManagerViewGLPComponent;
  let fixture: ComponentFixture<ManagerViewGLPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerViewGLPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewGLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
