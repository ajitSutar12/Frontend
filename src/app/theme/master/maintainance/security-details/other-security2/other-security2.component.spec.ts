import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSecurity2Component } from './other-security2.component';

describe('OtherSecurity2Component', () => {
  let component: OtherSecurity2Component;
  let fixture: ComponentFixture<OtherSecurity2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSecurity2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSecurity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
