import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyAgentMasterComponent } from './pigmy-agent-master.component';

describe('PigmyAgentMasterComponent', () => {
  let component: PigmyAgentMasterComponent;
  let fixture: ComponentFixture<PigmyAgentMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyAgentMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyAgentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
