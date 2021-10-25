import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotingChargesComponent } from './noting-charges.component';

describe('NotingChargesComponent', () => {
  let component: NotingChargesComponent;
  let fixture: ComponentFixture<NotingChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotingChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotingChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
