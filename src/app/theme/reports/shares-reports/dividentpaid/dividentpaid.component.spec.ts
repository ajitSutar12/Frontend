import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividentpaidComponent } from './dividentpaid.component';

describe('DividentpaidComponent', () => {
  let component: DividentpaidComponent;
  let fixture: ComponentFixture<DividentpaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividentpaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividentpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
