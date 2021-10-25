import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeATEComponent } from './scheme-ate.component';

describe('SchemeATEComponent', () => {
  let component: SchemeATEComponent;
  let fixture: ComponentFixture<SchemeATEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeATEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
