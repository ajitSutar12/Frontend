import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeParametersComponent } from './scheme-parameters.component';

describe('SchemeParametersComponent', () => {
  let component: SchemeParametersComponent;
  let fixture: ComponentFixture<SchemeParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
