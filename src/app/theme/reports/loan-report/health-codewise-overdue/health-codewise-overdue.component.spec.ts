import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCodewiseOverdueComponent } from './health-codewise-overdue.component';

describe('HealthCodewiseOverdueComponent', () => {
  let component: HealthCodewiseOverdueComponent;
  let fixture: ComponentFixture<HealthCodewiseOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCodewiseOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCodewiseOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
