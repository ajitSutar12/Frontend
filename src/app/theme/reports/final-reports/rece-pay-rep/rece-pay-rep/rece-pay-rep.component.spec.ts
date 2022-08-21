import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecePayRepComponent } from './rece-pay-rep.component';

describe('RecePayRepComponent', () => {
  let component: RecePayRepComponent;
  let fixture: ComponentFixture<RecePayRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecePayRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecePayRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
