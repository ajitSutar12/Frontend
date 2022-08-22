import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iframe3Component } from './iframe3.component';

describe('Iframe3Component', () => {
  let component: Iframe3Component;
  let fixture: ComponentFixture<Iframe3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iframe3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iframe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
