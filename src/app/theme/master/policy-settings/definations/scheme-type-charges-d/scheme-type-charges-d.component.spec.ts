import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeTypeChargesDComponent } from './scheme-type-charges-d.component';

describe('SchemeTypeChargesDComponent', () => {
  let component: SchemeTypeChargesDComponent;
  let fixture: ComponentFixture<SchemeTypeChargesDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeTypeChargesDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeTypeChargesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
