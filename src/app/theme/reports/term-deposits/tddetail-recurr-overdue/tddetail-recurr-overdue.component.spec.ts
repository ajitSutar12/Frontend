import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TddetailRecurrOverdueComponent } from './tddetail-recurr-overdue.component';

describe('TddetailRecurrOverdueComponent', () => {
  let component: TddetailRecurrOverdueComponent;
  let fixture: ComponentFixture<TddetailRecurrOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TddetailRecurrOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TddetailRecurrOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
