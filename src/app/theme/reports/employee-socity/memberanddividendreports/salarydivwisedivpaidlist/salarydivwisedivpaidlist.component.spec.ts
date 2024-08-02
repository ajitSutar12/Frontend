import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydivwisedivpaidlistComponent } from './salarydivwisedivpaidlist.component';

describe('SalarydivwisedivpaidlistComponent', () => {
  let component: SalarydivwisedivpaidlistComponent;
  let fixture: ComponentFixture<SalarydivwisedivpaidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydivwisedivpaidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydivwisedivpaidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
