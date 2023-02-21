import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrematuredAcCloseComponent } from './prematured-ac-close.component';

describe('PrematuredAcCloseComponent', () => {
  let component: PrematuredAcCloseComponent;
  let fixture: ComponentFixture<PrematuredAcCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrematuredAcCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrematuredAcCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
