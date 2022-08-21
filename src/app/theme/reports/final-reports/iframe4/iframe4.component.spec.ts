import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iframe4Component } from './iframe4.component';

describe('Iframe4Component', () => {
  let component: Iframe4Component;
  let fixture: ComponentFixture<Iframe4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iframe4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iframe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
