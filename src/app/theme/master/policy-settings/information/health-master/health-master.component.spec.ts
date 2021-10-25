import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMasterComponent } from './health-master.component';

describe('HealthMasterComponent', () => {
  let component: HealthMasterComponent;
  let fixture: ComponentFixture<HealthMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
