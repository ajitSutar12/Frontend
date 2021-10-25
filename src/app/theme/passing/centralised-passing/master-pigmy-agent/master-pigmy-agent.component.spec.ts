import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPigmyAgentComponent } from './master-pigmy-agent.component';

describe('MasterPigmyAgentComponent', () => {
  let component: MasterPigmyAgentComponent;
  let fixture: ComponentFixture<MasterPigmyAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPigmyAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPigmyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
