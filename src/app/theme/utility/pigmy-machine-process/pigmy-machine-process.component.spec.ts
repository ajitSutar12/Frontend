import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyMachineProcessComponent } from './pigmy-machine-process.component';

describe('PigmyMachineProcessComponent', () => {
  let component: PigmyMachineProcessComponent;
  let fixture: ComponentFixture<PigmyMachineProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyMachineProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyMachineProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
