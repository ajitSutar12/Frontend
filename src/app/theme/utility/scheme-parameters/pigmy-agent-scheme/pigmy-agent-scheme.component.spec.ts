import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyAgentSchemeComponent } from './pigmy-agent-scheme.component';

describe('PigmyAgentSchemeComponent', () => {
  let component: PigmyAgentSchemeComponent;
  let fixture: ComponentFixture<PigmyAgentSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyAgentSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyAgentSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
