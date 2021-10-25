import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePolicyComponent } from './fire-policy.component';

describe('FirePolicyComponent', () => {
  let component: FirePolicyComponent;
  let fixture: ComponentFixture<FirePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
