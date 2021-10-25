import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMasterParametersComponent } from './system-master-parameters.component';

describe('SystemMasterParametersComponent', () => {
  let component: SystemMasterParametersComponent;
  let fixture: ComponentFixture<SystemMasterParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMasterParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMasterParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
