import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSocityComponent } from './employee-socity.component';

describe('EmployeeSocityComponent', () => {
  let component: EmployeeSocityComponent;
  let fixture: ComponentFixture<EmployeeSocityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSocityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
