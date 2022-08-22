import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iframe5Component } from './iframe5.component';

describe('Iframe5Component', () => {
  let component: Iframe5Component;
  let fixture: ComponentFixture<Iframe5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iframe5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iframe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
