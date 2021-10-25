import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySettingsComponent } from './policy-settings.component';

describe('PolicySettingsComponent', () => {
  let component: PolicySettingsComponent;
  let fixture: ComponentFixture<PolicySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
