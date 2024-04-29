import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessACMComponent } from './process-acm.component';

describe('ProcessACMComponent', () => {
  let component: ProcessACMComponent;
  let fixture: ComponentFixture<ProcessACMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessACMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessACMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
