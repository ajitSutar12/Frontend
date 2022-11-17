import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyagentchangeComponent } from './pigmyagentchange.component';

describe('PigmyagentchangeComponent', () => {
  let component: PigmyagentchangeComponent;
  let fixture: ComponentFixture<PigmyagentchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyagentchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyagentchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
