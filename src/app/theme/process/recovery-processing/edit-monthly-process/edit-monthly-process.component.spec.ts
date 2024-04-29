import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonthlyProcessComponent } from './edit-monthly-process.component';

describe('EditMonthlyProcessComponent', () => {
  let component: EditMonthlyProcessComponent;
  let fixture: ComponentFixture<EditMonthlyProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonthlyProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMonthlyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
